import React, { createContext, useReducer, Dispatch } from "react";

export type InitialStateType = {
    mobileSidebarOpen: boolean;
};

export const initialState = {
    mobileSidebarOpen: false
};

export enum Types {
    OpenMobileSidebar = "OPEN_MOBILE_SIDEBAR",
    CloseMobileSidebar = "CLOSE_MOBILE_SIDEBAR"
}

type AppPayload = {
    [Types.CloseMobileSidebar]: unknown;
    [Types.OpenMobileSidebar]: unknown;
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];

export type DisptachType = Dispatch<AppActions>;

type ActionMap<M extends { [index: string]: unknown }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload?: M[Key];
          };
};

export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: DisptachType;
}>({
    state: initialState,
    dispatch: () => null
});

export const reducer = (state: InitialStateType, action: AppActions) => {
    switch (action.type) {
        case Types.OpenMobileSidebar:
            return { mobileSidebarOpen: true };
        case Types.CloseMobileSidebar:
            return { mobileSidebarOpen: false };
        default:
            throw new Error();
    }
};

export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
