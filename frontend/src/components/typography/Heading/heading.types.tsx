import React from "react";
import TextTypes, {
    defaultProps as defaultTextProps
} from "../Text/text.types";

export const componentVariants = {
    h1: <h1 />,
    h2: <h2 />,
    h3: <h3 />,
    h4: <h4 />,
    h5: <h5 />,
    h6: <h6 />
};

export default interface HeadingTypes extends TextTypes {
    variant?: keyof typeof componentVariants;
}

export const defaultProps: HeadingTypes = {
    ...defaultTextProps
};
