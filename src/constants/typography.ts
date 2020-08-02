import { valueToRem } from "../helpers/valueToPoint";

const defaultFontSize = 1.15;

export const fontSizes = {
    extraSmall: valueToRem(defaultFontSize * 0.66),
    small: valueToRem(defaultFontSize * 0.85),
    medium: valueToRem(defaultFontSize),
    large: valueToRem(defaultFontSize * 1.25),
    extraLarge: valueToRem(defaultFontSize * 1.7)
};

export const svgSizes = {
    extraSmall: valueToRem(defaultFontSize * 0.85),
    small: valueToRem(defaultFontSize * 1.1),
    medium: valueToRem(defaultFontSize * 1.4),
    large: valueToRem(defaultFontSize * 1.8),
    extraLarge: valueToRem(defaultFontSize * 2.2)
};

export const fontWeights = {
    light: 300,
    regular: 400,
    bold: 700,
    extraBold: 900
};

export default fontSizes;
