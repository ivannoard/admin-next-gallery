import React from "react";
import { PageTitle as PageTitleProps } from "../../../utils/types";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./page-title.scss";

const PageTitle = ({ text, goBack }: PageTitleProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-title-wrapper">
        {goBack && (
          <BiLeftArrowAlt
            size={28}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        )}
        <h2 className="page-title">{text}</h2>
      </div>
    </>
  );
};

export default PageTitle;
