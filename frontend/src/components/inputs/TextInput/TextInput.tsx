import React, { FunctionComponent } from "react";
import tw, { TwStyle } from "twin.macro";
import {
    TextInputProps,
    ColorTypes,
    SizeTypes,
    defaultProps
} from "./textInput.types";

const generateColor = (color: ColorTypes): TwStyle => {
    switch (color) {
        case "light":
            return tw`text-gray-normal`;
        case "medium":
            return tw`text-gray-dark`;
        case "dark":
            return tw`text-black`;

        default:
            return tw`text-black`;
    }
};

const generateSize = (color: SizeTypes): TwStyle => {
    switch (color) {
        case "small":
            return tw`p-oneThird text-small`;
        case "medium":
            return tw`p-half text-medium`;
        case "large":
            return tw`p-twoThirds text-medium`;

        default:
            return tw`p-half text-medium`;
    }
};

const TextInput: FunctionComponent<TextInputProps> = ({
    defaultValue,
    color = "medium",
    width,
    fullWidth,
    size = "medium",
    placeholder,
    round,
    inSearch = false,
    handleOnChange,
    handleOnBlur
}) => (
    <input
        css={[
            tw`leading-tight focus:outline-none`,
            !inSearch
                ? tw`shadow-lightSm border border-gray-normal focus:border-gray-dark focus:shadow-normalSm`
                : tw`flex-1 `,
            fullWidth && tw`w-full`,
            round && tw`rounded`,
            generateColor(color),
            generateSize(size)
        ]}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={!fullWidth && width ? width : undefined}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
    />
);

TextInput.defaultProps = defaultProps;

export default TextInput;
