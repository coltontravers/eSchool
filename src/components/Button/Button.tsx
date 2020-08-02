import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import { Spinner } from "@styled-icons/fa-solid";
import ButtonTypes, {
    defaultProps,
    buttonThemes,
    buttonSizes
} from "./button.types";

const generateButtonChildren = ({
    isLoading,
    icon: Icon,
    iconPlacement,
    children
}: ButtonTypes) => {
    if (isLoading) {
        return <Spinner />;
    }

    if (Icon && iconPlacement === "left") {
        return (
            <>
                {Icon}
                {children && <span>{children}</span>}
            </>
        );
    }

    return (
        <>
            {children && <span>{children}</span>}
            {Icon}
        </>
    );
};

const svgStyles = css`
    > svg {
        height: 1rem;
        width: auto;
        ${tw`px-half`}
    }
`;

export const Button: FunctionComponent<ButtonTypes> = ({
    theme,
    size,
    fullWidth,
    isLoading,
    disabled,
    round,
    icon,
    iconPlacement,
    children,
    ...restProps
}) => {
    return (
        <button
            type="button"
            css={[
                tw`text-white font-bold`,
                round && tw`rounded`,
                (disabled || isLoading) && tw`opacity-50 cursor-default`,
                fullWidth && tw`w-full`,
                theme && buttonThemes[theme],
                size && buttonSizes[size],
                svgStyles
            ]}
            disabled={disabled}
            {...restProps}
        >
            {generateButtonChildren({
                isLoading,
                icon,
                iconPlacement,
                children
            })}
        </button>
    );
};

Button.defaultProps = defaultProps;

export default Button;
