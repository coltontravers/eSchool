import { colorsTypesWithString } from "../../../types/colors";
import { TextInputProps } from "../TextInput/textInput.types";
import { FontSizesType } from "../../../types/typography";

export const iconPlacementOptions = ["left", "right"] as const;

export interface SearchProps extends Omit<TextInputProps, "inSearch"> {
    iconPlacement?: typeof iconPlacementOptions[number];
    iconColor?: colorsTypesWithString;
    iconSize?: FontSizesType;
}

export const defaultProps: SearchProps = {
    iconPlacement: "left",
    iconColor: "black"
};
