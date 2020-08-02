import styled from "styled-components";
import Flex from "../layout/Flex/Flex";
import colors from "../../constants/colors";
import Button from "../Button/Button";
import ButtonTypes from "../Button/button.types";
import { mediaQueriesMaxWidth } from "../../constants/mediaQueries";
import { InitialStateType } from "../../state/AppState";

interface StyledButtonProps extends ButtonTypes {
    isActive?: boolean;
}

interface StyledSidebarProps {
    isOpen: boolean;
    state: InitialStateType;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
    position: relative;
    ${({ isActive }) =>
        isActive &&
        `
        color: ${colors.secondary.dark};
        box-shadow: inset 15px 0px 29px -11px ${colors.secondary.normal};

        ::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: ${colors.secondary.dark}
        }
    `}

    span {
        width: 60%;
        text-align: left;
    }

    svg {
        flex: 1;
        min-width: 15px;
    }
`;

export const StyledFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StyledSidebar = styled(Flex)<StyledSidebarProps>`
    ${({ isOpen }) => {
        return isOpen
            ? `
                width: 15vw;
                min-width: 150px;
                max-width: 300px;
                `
            : `
                width: 7vw;
                min-width: 80px;
                max-width: 100px;

                ${StyledButton} {
                    svg {
                        height: 1.5rem;
                        width: 100%;
                    }
                }

                ${StyledFooter} {
                    justify-content: center;
                }
        `;
    }}
    background: ${colors.gray.dark};
    transition: .2s cubic-bezier(.13,.68,.83,.67) width,max-width,min-width;

    ${({ state }) => {
        return mediaQueriesMaxWidth.medium(`
            ${state.mobileSidebarOpen ? `display: block` : `display: none`};

            ${StyledFooter} {
                button:last-of-type {
                    display: none;
                }
            }
        `);
    }}
`;

export const StyledLibrary = styled.div`
    width: 100%;
    flex: 1;
`;

export const StyledBottom = styled.div`
    width: 100%;
`;
