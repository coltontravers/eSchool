import { HTMLAttributes } from "react";

export type ColorTypes = "light" | "medium" | "dark";
export const colors: ColorTypes[] = ["light", "medium", "dark"];

export type SizeTypes = "small" | "medium" | "large";
export const sizes: SizeTypes[] = ["small", "medium", "large"];

export interface TextInputProps
    extends Omit<HTMLAttributes<HTMLInputElement>, "width" | "color"> {
    color?: ColorTypes;
    width?: string;
    fullWidth?: boolean;
    size?: SizeTypes;
    placeholder?: string;
    round?: boolean;
    inSearch?: boolean;
    handleOnChange?: () => void;
    handleOnBlur?: () => void;
}

export const defaultProps: TextInputProps = {
    color: "medium",
    width: "auto",
    fullWidth: false,
    size: "medium",
    round: false,
    inSearch: false
};
