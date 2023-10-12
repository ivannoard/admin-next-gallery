import { LayoutProvider } from "./LayoutContext";

type ContextProps = {
  children: JSX.Element;
};

const AppContext = ({ children }: ContextProps) => {
  return (
    <>
      <LayoutProvider>{children}</LayoutProvider>
    </>
  );
};

export default AppContext;
