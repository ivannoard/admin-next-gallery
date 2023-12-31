export type ChildrenComponent = {
  children: JSX.Element;
};

export type FormType = {
  type: string;
  labelFor: string;
} & React.ComponentPropsWithoutRef<"input">;

export type PageTitle = {
  text: string;
  goBack?: boolean;
  size?: number;
};

export type Dropzone = {
  setDropzoneFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export type ModalData = {
  name?: string;
  image?: string;
  content?: string;
};

export type Modal = {
  image?: string;
  type?: string;
  id?: string | number;
  data?: ModalData;
  size?: "sm" | "md" | "lg";
};

export type Badge = {
  name: string;
  colorIndex?: number;
};
