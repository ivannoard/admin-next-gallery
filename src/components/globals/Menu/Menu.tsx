import React from "react";
import "./menu.scss";
import { LayoutContext } from "../../../context/LayoutContext";

const Menu = () => {
  const { showMenu } = React.useContext(LayoutContext);
  return (
    <>
      <div
        className={`menu ${showMenu === "show" ? "show-menu" : "hide-menu"}`}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something. . ."
        />
      </div>
    </>
  );
};

export default Menu;
