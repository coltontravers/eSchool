import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { useHistory } from "react-router-dom";
import { StyledButton } from "./Sidebar.styled";

const buttonMap = [
    {
        name: "Dashboard",
        path: "/"
    },
    {
        name: "Classes",
        path: "/classes"
    },
    {
        name: "Assignments",
        path: "/assignments"
    },
    {
        name: "Groups",
        path: "/groups"
    },
    {
        name: "Messages",
        path: "/messages"
    },
    {
        name: "Gradebook",
        path: "/gradebook"
    },
    {
        name: "Calendar",
        path: "/calendar"
    }
];

export const Sidebar: FunctionComponent = () => {
    const history = useHistory();

    return (
        <div
            css={[
                tw`w-1/6 bg-primary-normal overflow-hidden items-center flex flex-col pt-double`
            ]}
        >
            {buttonMap.map((button) => {
                const isActive = history.location.pathname === button.path;

                return (
                    <StyledButton
                        css={[
                            tw`w-10/12 rounded-full bg-primary-normal my-oneThird hover:text-gray-dark hover:bg-white`,
                            isActive && tw`bg-white text-gray-dark`
                        ]}
                        size="large"
                        active={isActive}
                        to={button.path}
                        key={`sidebar-nav-${button.name}`}
                    >
                        {button.name}
                    </StyledButton>
                );
            })}
        </div>
    );
};

export default Sidebar;
