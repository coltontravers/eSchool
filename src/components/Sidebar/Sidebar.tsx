import React, { FunctionComponent, useState, useContext } from "react";
import {
    Movie,
    Tv,
    Home,
    ArrowFromRight,
    ArrowFromLeft
} from "@styled-icons/boxicons-regular";
import { SettingsOutline } from "@styled-icons/evaicons-outline";
import browerStorageKeys from "../../constants/browserStorage";
import {
    StyledSidebar,
    StyledLibrary,
    StyledBottom,
    StyledButton,
    StyledFooter
} from "./Sidebar.styled";
import Button from "../Button/Button";
import convertStringToBoolean from "../../helpers/convertStringToBoolean";
import AppContext from "../../state/AppState";

const onToggleSidebarClick = (
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const toggledState = !isOpen;

    localStorage.setItem(
        browerStorageKeys.sidebar.open,
        toggledState.toString()
    );

    setIsOpen(toggledState);
};

export const Sidebar: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(
        convertStringToBoolean(
            localStorage.getItem(browerStorageKeys.sidebar.open)
        )
    );

    const { state } = useContext(AppContext);

    return (
        <StyledSidebar isOpen={isOpen} state={state}>
            <StyledLibrary>
                <StyledButton
                    background="transparent"
                    fullWidth
                    weight="extraBold"
                    isActive
                    icon={<Home />}
                >
                    {isOpen && "Home"}
                </StyledButton>
                <StyledButton
                    background="transparent"
                    fullWidth
                    weight="extraBold"
                    icon={<Movie />}
                >
                    {isOpen && "Movies"}
                </StyledButton>
                <StyledButton
                    background="transparent"
                    fullWidth
                    weight="extraBold"
                    icon={<Tv />}
                >
                    {isOpen && "Tv Shows"}
                </StyledButton>
            </StyledLibrary>
            <StyledBottom>
                <Button background="transparent" fullWidth weight="bold">
                    Recently Played
                </Button>
                <Button background="transparent" fullWidth weight="bold">
                    Playlists
                </Button>
                <Button background="transparent" fullWidth weight="bold">
                    Recommended
                </Button>

                <StyledFooter>
                    <Button background="transparent" hoverShadow={false}>
                        <SettingsOutline size="35" />
                    </Button>
                    {isOpen ? (
                        <Button
                            onClick={() =>
                                onToggleSidebarClick(isOpen, setIsOpen)
                            }
                            background="transparent"
                            hoverShadow={false}
                        >
                            <ArrowFromRight size="35" />
                        </Button>
                    ) : (
                        <Button
                            onClick={() =>
                                onToggleSidebarClick(isOpen, setIsOpen)
                            }
                            background="transparent"
                            hoverShadow={false}
                        >
                            <ArrowFromLeft size="35" />
                        </Button>
                    )}
                </StyledFooter>
            </StyledBottom>
        </StyledSidebar>
    );
};

export default Sidebar;
