import {
    mediaQueryMinWidth,
    mediaQueryMaxWidth
} from "../helpers/mediaQueries";

// Pixel values come straight from Bootstrap (https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
export const breakpoints = {
    small: "576px", // Small devices (landscape phones, 576px and up)
    medium: "768px", // Medium devices (tablets, 768px and up)
    large: "992px", // Large devices (desktops, 992px and up)
    xLarge: "1200px" // Extra large devices (large desktops, 1200px and up)
};

export const mediaQueriesMinWidth = {
    small: (css: string) => mediaQueryMinWidth(css, breakpoints.small),
    medium: (css: string) => mediaQueryMinWidth(css, breakpoints.medium),
    large: (css: string) => mediaQueryMinWidth(css, breakpoints.large),
    xLarge: (css: string) => mediaQueryMinWidth(css, breakpoints.xLarge)
};

export const mediaQueriesMaxWidth = {
    small: (css: string) => mediaQueryMaxWidth(css, breakpoints.small),
    medium: (css: string) => mediaQueryMaxWidth(css, breakpoints.medium),
    large: (css: string) => mediaQueryMaxWidth(css, breakpoints.large),
    xLarge: (css: string) => mediaQueryMaxWidth(css, breakpoints.xLarge)
};
