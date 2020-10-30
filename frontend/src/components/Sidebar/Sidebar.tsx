import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { StyledButton } from "./Sidebar.styled";

const buttonMap = [
    {
        name: "Dashboard",
        path: "/"
    },
    {
        name: "Classrooms",
        path: "/classrooms"
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
    const router = useRouter();

    return (
        <div
            css={[
                tw`w-1/6 bg-primary-normal overflow-hidden items-center flex flex-col pt-double`
            ]}
            style={{color: "red"}}
        >
            {buttonMap.map((button) => {
                const isActive = router.pathname === button.path;

                return (
                    <Link href={button.path} key={`sidebar-nav-${button.name}`}>
                    <StyledButton
                        css={[
                            tw`w-10/12 rounded-full bg-primary-normal my-oneThird hover:text-gray-dark hover:bg-white`,
                            isActive && tw`bg-white text-gray-dark`
                        ]}
                        size="large"
                        active={isActive}
                    >
                        {button.name}
                    </StyledButton>
                    </Link>
                    
                );
            })}
        </div>
    );
};

export default Sidebar;
