import React, { ReactNode, FunctionComponent, useContext } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import AppContext, { AppProvider, DisptachType, Types } from "context/AppContext";
import GlobalStyles from "styles";
import "../../public/tailwind.css";
import "react-circular-progressbar/dist/styles.css";
import { StyledPageWrapper, StyledComponentWrapper } from "./index.styled";
import Sidebar from "components/Sidebar/Sidebar";
import PageProps from "./indexTypes";
import { useSwipeable, EventData } from "react-swipeable";
// import { GlobalStyles } from 'twin.macro'


const queryCache = new QueryCache();

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

const App = ({Component, pageProps}: {Component: any, pageProps: any}) => {
    const { dispatch } = useContext(AppContext);

    const handlers = useSwipeable({
        onSwiped: (eventData) => swipeHandler(eventData, dispatch)
    });

    return (
        <AppProvider>
                <ReactQueryCacheProvider queryCache={queryCache}>
                <StyledPageWrapper {...handlers}>
            <Sidebar />
            <StyledComponentWrapper>
            <Component {...pageProps} />
            </StyledComponentWrapper>
        </StyledPageWrapper>
                        
                </ReactQueryCacheProvider>
                <GlobalStyles />
        </AppProvider>
    );
};

export default App;


