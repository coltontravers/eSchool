import styled from "styled-components";
import ButtonTypes from "../Button/button.types";
import Button from "../Button/Button";

interface ButtonProps extends ButtonTypes {
    active: boolean;
}

export const StyledButton = styled(Button)<ButtonProps>`
    position: relative;

    ${({ active }) => {
        return (
            active &&
            `
            ::before {
                content: "";
                position: absolute;
                bottom: 100%;
                right: -10%;
                height: 100%;
                width: 22%;
                border-bottom-right-radius: 25px;
                box-shadow: .5em 2em 0px .5em white;
                pointer-events: none;
            }
        
            ::after {
                content: "";
                position: absolute;
                top: 100%;
                right: -10%;
                height: 100%;
                width: 22%;
                border-top-right-radius: 25px;
                box-shadow: .5em -2em 0px .5em white;
                pointer-events: none;
            }
        `
        );
    }}
`;
