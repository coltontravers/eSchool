import React from "react";
import { Home as HomeIcon } from "@styled-icons/boxicons-regular";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";

const routes = [
    {
        path: "/",
        name: "home",
        description: "Home",
        component: Home,
        sidebarEnabled: true,
        icon: <HomeIcon />,
        exact: true
    },
    {
        path: "/classes",
        name: "classes",
        description: "Classes",
        component: Classes,
        sidebarEnabled: true,
        icon: <HomeIcon />,
        exact: true
    }
];

export default routes;
