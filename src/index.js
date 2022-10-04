class quickString {
    static initialStringBuilder = new Uint8Array();
    static capacityGrowFactor = 1.5; //default capacity grow factor is 1.5

    #stringBuilder;
    #size;
    #opacity;

    constructor() {
        this.#stringBuilder = quickString.initialStringBuilder;
        this.#size = 0;

        if (arguments.length === 0) {
            this.reserve(quickString.capacityGrow(0));
        }

        else if (arguments.length === 1 && typeof arguments[0] === 'number') {
            //given the length of the string
            this.reserve(arguments[0]);
        }

        else if (arguments.length === 2 && typeof arguments[0] === 'number' && arguments[1] === 'string') {
            //given the length of the string, and filled it with arguments[1]
            this.reserve(arguments[0]);
            this.fill(0, arguments[0], arguments[1]);
            this.#size = arguments[0];
        }

        else if (arguments.length === 1 && typeof arguments[0] === 'string') {
            //uses given string to make string builder
            this.reserve(
                quickString.capacityGrow(
                    0,
                    arguments[0].length
                )
            );
            this.copy(arguments[0]);
            this.#size = arguments[0].length;
        }

        else if (arguments.length === 1 && arguments[0] instanceof Array) {
            //concat array and make string builder
            const string = arguments[0].join('');
            this.reserve(
                quickString.capacityGrow(
                    0,
                    string.length
                )
            );
            this.copy(string);
            this.#size = string.length;
        }

        else if (arguments.length === 1 && arguments[0] instanceof quickString) {
            const string = arguments[0];
            this.reserve(string.opacity());
            this.copy(string.getUint8Array());
            this.#size = string.size();
        }
        else if (arguments.length === 1 && arguments[0] instanceof Uint8Array) {
            this.reserve(arguments[0].length);
            this.copy(arguments[0]);
            this.#size = arguments[0].length;
        }
        else throw new TypeError('Cannot find overload of the constructor.');
    };

    static capacityGrow(currentOpacity, targetOpacity = 15) {
        if (!Number.isInteger(currentOpacity) || currentOpacity < 0) throw new TypeError('currentOpacity must be a non-negative integer.');
        if (!Number.isInteger(targetOpacity) || targetOpacity < 0) throw new TypeError('targetOpacity must a non-negative integer.');
        //calculate the capacity by current size
        var opacity = currentOpacity;
        while (opacity < targetOpacity) {
            if (opacity < 32) opacity += 16;
            else return opacity * quickString.capacityGrowFactor;
        };
        return ~~(opacity + 1);
    };

    static nativeStringToUint8Array(string) {
        if (typeof string !== 'string') throw new TypeError('String must be a string');
        const buffer = new Uint8Array(string.length);
        if (buffer.length === 0 && string.length !== 0) throw new MemoryError('Cannot allocate memory for string.', string.length);
        for (let i = 0; i < string.length; ++i) {
            buffer[i] = string[i].charCodeAt();
        };
        return buffer;
    };

    getUint8Array() {
        return this.#stringBuilder;
    };

    reserve(opacity) {
        if (!Number.isInteger(opacity) || opacity < 0) throw new TypeError('Opacity must be a non-negative integer.');
        this.#opacity = opacity;
        this.#size = Math.min(this.#size, this.#opacity);
        //reset size and opacity

        //copy data from the old buffer to the new
        const old_buffer = this.#stringBuilder;
        this.#stringBuilder = new Uint8Array(opacity);

        for (let i = 0; i < this.#size; ++i) {
            this.#stringBuilder[i] = old_buffer[i];
        };
    };

    resize(size) {
        if (!Number.isInteger(size) || size < 0) throw new TypeError('Size must be a non-negative integer.');
        if (size >= this.#opacity) this.reserve(size);
        this.#size = size;
    };

    copy() {
        if (arguments.length === 1 && typeof arguments[0] === 'string') {
            return this.copy(
                quickString.nativeStringToUint8Array(arguments[0])
            );
        }
        else if (arguments.length === 1 && arguments[0] instanceof Uint8Array) {
            if (arguments[0].length >= this.#opacity)
                this.reserve(
                    quickString.capacityGrow(
                        0,
                        arguments[0].length
                    )
                );
            var buffer = arguments[0];
            for (let i = 0; i < buffer.length; i++) {
                this.#stringBuilder[i] = buffer[i];
            };
            this.#size = buffer.length;
        }
        else throw new TypeError('Cannot find overload of this function: [dynamic] quickString.copy');
    };

    fill(start_position, end_position, char) {
        if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('Start position must be a non-negative integer.');
        if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('End position must be a non-negative integer.');
        if (typeof char !== 'string' || char.length > 0) throw new TypeError('Char must be a character.');
        if (end_position >= this.#opacity) this.reserve(
            quickString.capacityGrow(this.#opacity, end_position)
        );
        const char_ascii = char.charCodeAt();
        for (let i = start_position; i <= end_position; ++i) {
            this.#stringBuilder[i] = char_ascii;
        };
        this.#size = Math.max(this.#size, end_position);
    };

    size() {
        return this.#size;
    };

    opacity() {
        return this.#opacity;
    };

    append() {
        for (let i = 0; i < arguments.length; ++i) this._append_string(arguments[i]);
    }

    _append_string(string) {
        if (typeof string === 'string') return this._append_string(
            quickString.nativeStringToUint8Array(string)
        );
        else if (string instanceof quickString) return this._append_string(
            string.getUint8Array()
        );
        else if (string instanceof Uint8Array) {
            if ((this.#size + string.length) >= this.#opacity) //need reserve
                this.reserve(
                    quickString.capacityGrow(this.#opacity, this.#size + string.length)
                );
            for (let i = 0; i < string.length; ++i) this.#stringBuilder[this.#size + i] = string[i];
            this.#size += string.length;
        }
        else throw new TypeError('Cannot find overload of this function: [dynamic] quickString._append_string');
    }

    at(pos) {
        if (!Number.isInteger(pos)) throw new TypeError('pos must be a integer');
        if (pos < 0) //visit from the end of the string
            pos = this.#size + pos;
        if (pos >= this.#opacity || pos < 0) throw new AccessError('Segmentation fault');
        return String.fromCharCode(this.#stringBuilder[pos]);
    };

    concat() {
        return this.append(arguments);
    };

    endsWith(string) {
        if (typeof string !== 'string') throw new TypeError('String must be a string');
        if (string.length > this.#size) return false; //over limit
        let startPosition = this.#size - string.length;
        for (let i = startPosition; i < this.#size; ++i) if (string[i - startPosition].charCodeAt() !== this.#stringBuilder[i]) return false;
        return true;
    };

    indexOf(substring, start_position = 0, end_position = -1) {
        //I'm too lazy to realize kmp
        if (end_position === -1) end_position = this.#size;
        if (typeof substring !== 'string') throw new TypeError('substring must be a string');
        if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('start_position must be a non-negative integer.');
        if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('end_position must be a non-negative integer.');
        let i = start_position, j = 0;
        for (; i < end_position; ++i) {
            let isMatch = true;
            for (j = 0; j < substring.length; ++j)
                if (this.#stringBuilder[i + j] !== substring[j]) {
                    isMatch = false;
                    break;
                }
            if (isMatch) return i;
        };
        return -1;
    };

    lastIndexOf(substring, start_position = -1, end_position = 0) {
        //I'm too lazy to realize kmp
        if (start_position === -1) start_position = this.#size - substring.length;
        if (typeof substring !== 'string') throw new TypeError('substring must be a string');
        if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('start_position must be a non-negative integer.');
        if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('end_position must be a non-negative integer.');
        let i = start_position, j = 0;
        for (; i >= end_position; --i) {
            let isMatch = true;
            for (j = 0; j < substring.length; ++j)
                if (this.#stringBuilder[i + j] !== substring[j]) {
                    isMatch = false;
                    break;
                }
            if (isMatch) return i;
        };
        return -1;
    };

    substring(start_position, end_position) {
        if (start_position < 0) start_position = start_position + this.#size;
        if (end_position < 0) end_position = end_position + this.#size;
        //support substring from the ending
        if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('start_position must be a non-negative integer.');
        if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('end_position must be a non-negative integer.');
        if (start_position >= this.#opacity || end_position >= this.#opacity) throw new AccessError('Segmentation fault.');
        if (end_position < start_position) throw new Error('end_position must not be less than start_position.');
        const buffer = new Uint8Array(end_position - start_position + 1);
        if (buffer.length === 0) throw new MemoryError('Cannot allocate memory for buffer.', end_position - start_position + 1);
        for (let i = start_position; i <= end_position; ++i) buffer[i - start_position] = this.#stringBuilder[i];
        return new quickString(buffer);
    };

    insert(insert_position, insert_string) {
        if (insert_position < 0) insert_position += this.#size;
        if (!Number.isInteger(insert_position)) throw new TypeError('insert position must be an integer');
        if (insert_position < 0) throw new TypeError('insert position must be a non-negative integer.');
        if (insert_position >= this.#opacity) throw new AccessError('Segmentation fault');
        if (insert_position >= this.#size) console.warn('Warning: Insert position is out of size');
        if (typeof insert_string === 'string') return this.insert(insert_position,
            quickString.nativeStringToUint8Array(insert_string)
        );
        else if (insert_string instanceof Uint8Array) {
            if ((this.#size + insert_string.length) >= this.#opacity) this.reserve(
                quickString.capacityGrow(this.#opacity, this.#size + insert_string.length)
            );
            for (let i = this.#size + insert_string.length; i >= insert_position + insert_string.length; i--) {
                this.#stringBuilder[i] = this.#stringBuilder[i - insert_string.length];
            }; //prepare space for the insert string
            for (let i = 0; i < insert_string.length; i++) {
                this.#stringBuilder[i + insert_position] = insert_string[i];
            };
            this.#size += insert_string.length;

        } else throw new TypeError('Cannot find overload of this function: [dynamic] quickString.insert');
    };

    remove(remove_position, remove_length) {
        if (remove_position < 0) remove_position += this.#size;
        if (!Number.isInteger(remove_position) || remove_position < 0) throw new TypeError('remove position must be a non-negative integer');
        for (let i = remove_position; i < remove_position + remove_length; i++) {
            if (i >= this.#size) {
                this.#size = Math.min(this.#opacity, i);
                return;
            };
            this.#stringBuilder[i] = this.#stringBuilder[i + remove_length];
        };
        this.#size -= remove_length;
    };

    set(pos, value) {
        if (pos < 0) pos = pos + this.#size;
        if (!Number.isInteger(pos) || pos < 0) throw new TypeError('pos must be a non-negative integer');
        if (pos >= this.#opacity) throw new AccessError('Segmentation fault');
        if (pos >= this.#size) console.warn('Warning: set position is out of size');
        if (typeof value === 'string')
            this.#stringBuilder[pos] = String.fromCharCode(value);
        else if (typeof value === 'number') this.#stringBuilder[pos] = value;
        else throw new TypeError('Cannot find overload of this function: [dynamic] quickString.set');
    };

    toString() {
        return String.fromCharCode(...this.#stringBuilder.slice(0, this.#size));
    };

    releaseFree() {
        let i = this.#opacity - 1;
        if (i < 0) return 0;
        for (; this.#stringBuilder[i] === 0; --i);
        this.reserve(i + 1);
        return i + 1;
    };

    valueOf() {
        return this.toString();
    };

    *[Symbol.iterator]() {
        for (let i = 0; i < this.#stringBuilder.length; ++i) yield String.fromCharCode(this.#stringBuilder[i]);
    };
};

class MemoryError extends Error {
    memory;
    constructor(message, memory = 0x3f3f3f3f) {
        super(...arguments);
        if (typeof message !== 'string') throw new TypeError('Error message must be a string');
        if (!Number.isInteger(memory) || memory < 0) throw new TypeError('Memory must be a non-negative integer');
        this.message = message + '\nTrying to allocate memory ' + MemoryError.formatSize(memory);
        this.memory = memory;
    };

    static formatSize(size) {
        if (!Number.isInteger(size)) throw new TypeError('Size must be a number');
        if (size < 1024)
            return size + 'B';
        else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + 'KB';
        else if (size < 1024 * 1024 * 1024) return (size / 1024 / 1024).toFixed(2) + 'MB';
        else if (size < 1024 * 1024 * 1024 * 1024) return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
        return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + 'TB';
    };
};

class AccessError extends Error {
    constructor(message) {
        super(...arguments);
    };
};