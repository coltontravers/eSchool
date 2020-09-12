import tw from "twin.macro";

export const fontSizes = {
    xSmall: tw`text-extraSmall`,
    small: tw`text-small`,
    medium: tw`text-medium`,
    large: tw`text-large`
};

export type FontSizesType = keyof typeof fontSizes;
