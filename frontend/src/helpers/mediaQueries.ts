export const mediaQueryMinWidth = (css: string, breakpoint: string) => {
    return `@media (min-width: ${breakpoint}) {
        ${css}
    }`;
};

export const mediaQueryMaxWidth = (css: string, breakpoint: string) => {
    return `@media (max-width: ${breakpoint}) {
        ${css}
    }`;
};
