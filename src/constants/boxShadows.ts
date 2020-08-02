import { transparentize } from "polished";

const defaultBoxShadowColor = "#ababab";

const boxShadowColors = {
    light: defaultBoxShadowColor,
    normal: transparentize(0.2, defaultBoxShadowColor),
    dark: transparentize(0.2, defaultBoxShadowColor)
};

const boxShadowSizes = {
    extraSmall: "0 0 1px 0px",
    small: "0 0 2px 0px",
    medium: "0 0 4px 1px",
    large: "0 0 6px 3px"
};

export const boxShadows = {
    light: {
        extraSmall: `${boxShadowSizes.extraSmall} ${boxShadowColors.light}`,
        small: `${boxShadowSizes.small} ${boxShadowColors.light}`,
        medium: `${boxShadowSizes.medium} ${boxShadowColors.light}`,
        large: `${boxShadowSizes.large} ${boxShadowColors.light}`
    },
    normal: {
        extraSmall: `${boxShadowSizes.extraSmall} ${boxShadowColors.normal}`,
        small: `${boxShadowSizes.small} ${boxShadowColors.normal}`,
        medium: `${boxShadowSizes.medium} ${boxShadowColors.normal}`,
        large: `${boxShadowSizes.large} ${boxShadowColors.normal}`
    },
    dark: {
        extraSmall: `${boxShadowSizes.extraSmall} ${boxShadowColors.dark}`,
        small: `${boxShadowSizes.small} ${boxShadowColors.dark}`,
        medium: `${boxShadowSizes.medium} ${boxShadowColors.dark}`,
        large: `${boxShadowSizes.large} ${boxShadowColors.dark}`
    }
};

export default boxShadows;
