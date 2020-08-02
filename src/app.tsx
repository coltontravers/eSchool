import { hot } from "react-hot-loader/root";
import React from "react";
// import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";
import routes from "./config/routes";
import PageWrapper from "./pages";
import GlobalStyles from "./styles";
import "./assets/main.css";
import { AppProvider } from "./state/AppState";
// import { theme } from "./theme";
import Theme from "./Theme";

const queryConfig = {
    shared: {
        suspense: true
    }
};

const App = () => {
    return (
        <AppProvider>
            <Router>
                <ReactQueryConfigProvider config={queryConfig}>
                    {/* <ThemeProvider theme={theme}> */}
                    <Theme>
                        <div>
                            {routes.map((route, index) => {
                                const { path, ...restRouteProps } = route;
                                const key = `routes-${index}`;

                                return (
                                    <Route
                                        path={path}
                                        key={key}
                                        exact={!!route.exact}
                                    >
                                        <PageWrapper
                                            route={{ ...restRouteProps }}
                                        />
                                    </Route>
                                );
                            })}
                        </div>
                    </Theme>
                    {/* </ThemeProvider> */}
                </ReactQueryConfigProvider>
                <GlobalStyles />
            </Router>
        </AppProvider>
    );
};

export default hot(App);
