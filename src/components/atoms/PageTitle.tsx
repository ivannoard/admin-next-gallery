import React from "react";
import { PageTitle as PageTitleProps } from "../../utils/types";
import "./atoms.scss";

const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <>
      <div className="page-title-wrapper">
        <h2 className="page-title">{text}</h2>
      </div>
    </>
  );
};

export default PageTitle;
