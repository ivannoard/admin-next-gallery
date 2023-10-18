import React, { createContext } from "react";

type LayoutProvider = {
  children: JSX.Element;
};
type LayoutType = {
  showMenu: string;
};
type LayoutActionType = {
  type: string;
  payload: string;
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
      return state;
  }
};

export const LayoutContext = createContext<{
  state: LayoutType;
  dispatch: React.Dispatch<LayoutActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const LayoutProvider = ({ children }: LayoutProvider) => {
  const [state, dispatch] = React.useReducer(LayoutReducers, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
