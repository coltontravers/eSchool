import React from "react";
import TextTypes, {
    defaultProps as defaultTextProps
} from "../Text/text.types";

/* eslint-disable jsx-a11y/heading-has-content */
export const componentVariants = {
    h1: <h1 />,
    h2: <h2 />,
    h3: <h3 />,
    h4: <h4 />,
    h5: <h5 />,
    h6: <h6 />
};
/* eslint-enable jsx-a11y/heading-has-content */

export default interface HeadingTypes extends TextTypes {
    variant?: keyof typeof componentVariants;
}

export const defaultProps: HeadingTypes = {
    ...defaultTextProps
};
