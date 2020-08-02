import { ReactNode } from "react";
import { fontSizes, fontWeights } from "../../../constants/typography";
import { colorsTypesWithString } from "../../../constants/colors";

export default interface TextTypes {
    size?: keyof typeof fontSizes;
    weight?: keyof typeof fontWeights;
    color?: colorsTypesWithString;
    outline?: boolean;
    truncate?: boolean;
    children: ReactNode;
}

export const defaultProps: TextTypes = {
    size: "medium",
    weight: "regular",
    color: "black",
    outline: false,
    truncate: false,
    children: null
};
