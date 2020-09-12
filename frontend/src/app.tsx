import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";
import routes from "./config/routes";
import PageWrapper from "./pages";
import GlobalStyles from "./styles";
import "./assets/main.css";
import { AppProvider } from "./state/AppState";

const queryConfig = {
    shared: {
        suspense: false
    }
};

const App = () => {
    return (
        <AppProvider>
            <Router>
                <ReactQueryConfigProvider config={queryConfig}>
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
                </ReactQueryConfigProvider>
                <GlobalStyles />
            </Router>
        </AppProvider>
    );
};

export default hot(App);
