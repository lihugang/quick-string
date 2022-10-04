declare class quickString {
    static initialStringBuilder: Uint8Array;
    static capacityGrowFactor: number; //default capacity grow factor is 1.5

    #stringBuilder: string[];
    #size: number;
    #opacity: number;

    constructor();
    constructor(length: number);
    constructor(length: number, filled_char: string);
    constructor(filled_string: string);
    constructor(filled_string_array: string[]);
    constructor(string: quickString);
    constructor(string: Uint8Array);

    static capacityGrow(currentOpacity: number, targetOpacity: number | undefined): number;

    static nativeStringToUint8Array(string: string): Uint8Array;

    getUint8Array(): Uint8Array;

    reserve(opacity: number): void;

    resize(size: number): void;

    copy(string: string): void;
    copy(string: Uint8Array): void;

    fill(start_position: number, end_position: number, char: string): void;

    size(): number;

    opacity(): number;

    append(strings: Array<string | Uint8Array | quickString>): void;

    _append_string(string: string | Uint8Array | quickString): void;

    at(pos: number): string;

    concat(strings: Array<string | Uint8Array | quickString>): void;

    endsWith(substring: string): boolean;

    indexOf(substring: string, start_position: number | undefined, end_position: number | undefined): number;

    lastIndexOf(substring: string, start_position: number | undefined, end_position: number | undefined): number;

    substring(start_position: number, end_position: number): quickString;

    insert(insert_position: number, insert_string: string | Uint8Array): void;

    remove(remove_position: number, remove_length: number): void;

    set(pos: number, value: string | number): void;

    toString(): string;

    releaseFree(): number;

    valueOf(): string;

}

declare class MemoryError extends Error {
    memory: number;
    constructor(message: string, memory: number | undefined);

    static formatSize(size: number): string;
}

declare class AccessError extends Error {
    constructor(message: string);
}

export { quickString, MemoryError, AccessError };