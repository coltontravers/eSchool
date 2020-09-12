import { ReactNode } from "react";
import tw from "twin.macro";
import { colorsTypesWithString } from "../../../types/colors";

export const fontSizes = {
    extraSmall: tw`text-extraSmall`,
    small: tw`text-small`,
    medium: tw`text-medium`,
    large: tw`text-large`,
    extraLarge: tw`text-extraLarge`
};

export const fontWeights = {
    light: tw`font-light`,
    regular: tw`font-regular`,
    bold: tw`font-bold`,
    extraBold: tw`font-extraBold`
};

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
    // color: "black",
    outline: false,
    truncate: false,
    children: null
};
