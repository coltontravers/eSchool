import { ElementType } from "react";

export default interface PageProps {
    route: {
        sidebarEnabled: boolean;
        component?: ElementType;
    };
}

export const defaultProps: PageProps = {
    route: { sidebarEnabled: false }
};
