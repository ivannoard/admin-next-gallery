import React from "react";
import { createContext } from "react";

type SideMenuProvider = {
  children: JSX.Element;
};
type SideMenuType = {
  menuActive: string;
};
type SideMenuActionType = {
  type: string;
  payload: string;
};
const initialState = {
  menuActive: "",
};

const SideMenuReducers = (state: SideMenuType, action: SideMenuActionType) => {
  return { ...state, menuActive: action.payload };
};

export const SideMenuContext = createContext<{
  menuActiveState: SideMenuType;
  dispatch: React.Dispatch<SideMenuActionType>;
}>({
  menuActiveState: initialState,
  dispatch: () => {},
});

export const SideMenuProvider = ({ children }: SideMenuProvider) => {
  const [menuActiveState, dispatch] = React.useReducer(
    SideMenuReducers,
    initialState
  );
  return (
    <SideMenuContext.Provider value={{ menuActiveState, dispatch }}>
      {children}
    </SideMenuContext.Provider>
  );
};
