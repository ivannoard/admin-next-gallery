export type ChildrenComponent = {
  children: JSX.Element;
};
export type FormType = {
  type: string;
  labelFor: string;
} & React.ComponentPropsWithoutRef<"input">;

export type PageTitle = {
  text: string;
};
