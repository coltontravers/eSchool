export type colorsTypes =
    | "white"
    | "black"
    | "transparent"
    | "warning"
    | "success"
    | "gray.light"
    | "gray.normal"
    | "gray.dark"
    | "primary.light"
    | "primary.normal"
    | "primary.dark"
    | "secondary.light"
    | "secondary.normal"
    | "secondary.dark"
    | "tertiary.light"
    | "tertiary.normal"
    | "tertiary.dark"
    | "borders.light"
    | "borders.normal"
    | "borders.dark";

// This is to allow for autocomplete to have the color constants, while still allowing you to enter anything in a string.
type LiteralUnion<T extends U, U = string> = T | (U & { ignoreMe?: never });

export type colorsTypesWithString = LiteralUnion<colorsTypes>;

export default colorsTypes;
