import React, { FunctionComponent, useState } from "react";
import tw from "twin.macro";
import { StyledButton } from "./Sidebar.styled";

const buttonMap = [
    "Dashboard",
    "Classes",
    "Assignments",
    "Groups",
    "Messages",
    "Gradebook",
    "Calendar"
];

export const Sidebar: FunctionComponent = () => {
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div
            css={[
                tw`w-1/6 bg-primary-normal overflow-hidden items-center flex flex-col pt-double`
            ]}
        >
            {buttonMap.map((button, index) => {
                const isActive = index === activeButton;

                return (
                    <StyledButton
                        css={[
                            tw`w-10/12 rounded-full bg-primary-normal my-oneThird hover:text-gray-dark hover:bg-white`,
                            isActive && tw`bg-white text-gray-dark`
                        ]}
                        onClick={() => setActiveButton(index)}
                        size="large"
                        active={isActive}
                        key={`sidebar-nav-${button}`}
                    >
                        {button}
                    </StyledButton>
                );
            })}
        </div>
    );
};

export default Sidebar;
