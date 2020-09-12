import { ReactNode, HTMLAttributes } from "react";
import tw from "twin.macro";

export const buttonThemes = {
    normal: tw`bg-primary-normal hover:bg-primary-dark`,
    danger: tw`bg-tertiary-normal hover:bg-tertiary-dark`,
    info: tw`bg-secondary-normal hover:bg-secondary-dark`,
    warning: tw`bg-warning`,
    success: tw`bg-success`
};

export const buttonSizes = {
    small: tw`py-oneThird px-half`,
    normal: tw`py-half px-twoThirds`,
    large: tw`py-twoThirds px-full`
};

export default interface ButtonTypes
    extends Omit<HTMLAttributes<HTMLButtonElement>, "size" | "as"> {
    isLoading?: boolean;
    width?: string;
    minWidth?: string | false;
    size?: keyof typeof buttonSizes;
    theme?: keyof typeof buttonThemes;
    fullWidth?: boolean;
    disabled?: boolean;
    round?: boolean;
    icon?: ReactNode;
    iconPlacement?: "left" | "right";
    children: ReactNode;
}

export const defaultProps: ButtonTypes = {
    isLoading: false,
    width: "auto",
    size: "normal",
    theme: "normal",
    fullWidth: false,
    disabled: false,
    round: false,
    iconPlacement: "left",
    children: null
};
