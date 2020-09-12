import { lighten, darken } from "polished";

const defaultColors = {
    primary: "#07689f",
    secondary: "#a2d5f2",
    tertiary: "#ff7e67",
    gray: "#9b9b9b",
    border: "#000000"
};

export const colors = {
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
    warning: "orange",
    success: "green",
    gray: {
        light: lighten(0.25, defaultColors.gray),
        normal: defaultColors.gray,
        dark: darken(0.25, defaultColors.gray)
    },
    primary: {
        light: lighten(0.2, defaultColors.primary),
        normal: defaultColors.primary,
        dark: darken(0.2, defaultColors.primary)
    },
    secondary: {
        light: lighten(0.1, defaultColors.secondary),
        normal: defaultColors.secondary,
        dark: darken(0.1, defaultColors.secondary)
    },
    tertiary: {
        light: lighten(0.1, defaultColors.tertiary),
        normal: defaultColors.tertiary,
        dark: darken(0.1, defaultColors.tertiary)
    },
    borders: {
        light: lighten(0.5, defaultColors.border),
        normal: lighten(0.2, defaultColors.border),
        dark: defaultColors.border
    }
};

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

export default colors;
