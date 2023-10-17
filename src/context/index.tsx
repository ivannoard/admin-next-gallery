import { LayoutProvider } from "./LayoutContext";
import { SideMenuProvider } from "./SideMenuContext";

type ContextProps = {
  children: JSX.Element;
};

const AppContext = ({ children }: ContextProps) => {
  return (
    <>
      <LayoutProvider>
        <SideMenuProvider>{children}</SideMenuProvider>
      </LayoutProvider>
    </>
  );
};

export default AppContext;
