import React from "react";
import { createContext } from "react";

type LayoutProvider = {
  children: JSX.Element;
};
type LayoutType = {
  showMenu: string;
};
type LayoutActionType = {
  type: "show" | "hide";
  payload: "show" | "hide";
};
const initialState = {
  showMenu: "",
};

const LayoutReducers = (state: LayoutType, action: LayoutActionType) => {
  switch (action.type) {
    case "show":
      return { ...state, showMenu: action.payload };
    case "hide":
      return { ...state, showMenu: action.payload };
    default:
      break;
  }
};

export const LayoutContext = createContext<{
  state: LayoutType;
  dispatch: React.Dispatch<unknown>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const LayoutProvider = ({ children }: LayoutProvider) => {
  const [state, dispatch] = React.useReducer(LayoutReducers, initialState);
  const value = {
    showMenu: state.showMenu,
    funcShowHideMenu: (typeMenu: string) => {
      dispatch({ type: typeMenu, payload: typeMenu });
    },
  };
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
