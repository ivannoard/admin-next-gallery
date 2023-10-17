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
  //   switch (action.type) {
  //     case "show":
  //       return { ...state, menuActive: action.payload };
  //     case "hide":
  //       return { ...state, menuActive: action.payload };
  //     default:
  //       break;
  //   }
};

export const SideMenuContext = createContext<{
  state: SideMenuType;
  dispatch: React.Dispatch<unknown>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const SideMenuProvider = ({ children }: SideMenuProvider) => {
  const [state, dispatch] = React.useReducer(SideMenuReducers, initialState);
  const value = {
    menuActive: state.menuActive,
    setMenuActive: (item) => {
      console.log(item);
      dispatch({ type: item, payload: item });
    },
  };
  return (
    <SideMenuContext.Provider value={value}>
      {children}
    </SideMenuContext.Provider>
  );
};
