import React, { FunctionComponent, useContext } from "react";
import { useSwipeable, EventData } from "react-swipeable";
import Sidebar from "../components/Sidebar/Sidebar";
import PageProps, { defaultProps } from "./indexTypes";
import AppContext, { DisptachType, Types } from "../context/AppContext";
import { StyledPageWrapper, StyledComponentWrapper } from "./index.styled";

const swipeHandler = (
    eventData: EventData,
    dispatch: DisptachType
    // eslint-disable-next-line consistent-return
) => {
    switch (eventData.dir) {
        case "Left":
            return dispatch({ type: Types.CloseMobileSidebar });

        case "Right":
            return dispatch({ type: Types.OpenMobileSidebar });

        default:
            break;
    }
};

const Page: FunctionComponent<PageProps> = ({
    route: { component: Component }
}) => {
    const { dispatch } = useContext(AppContext);

    const handlers = useSwipeable({
        onSwiped: (eventData) => swipeHandler(eventData, dispatch)
    });

    return (
        <StyledPageWrapper {...handlers}>
            <Sidebar />
            <StyledComponentWrapper>
                {Component && <Component />}
            </StyledComponentWrapper>
        </StyledPageWrapper>
    );
};

Page.defaultProps = defaultProps;

export default Page;
