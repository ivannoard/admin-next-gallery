import React from "react";
import "./menu.scss";
import { LayoutContext } from "../../../context/LayoutContext";
import { capitalizeWord } from "../../../utils/words";
import { SideMenuContext } from "../../../context/SideMenuContext";

const Menu = () => {
  const { state } = React.useContext(LayoutContext);
  const { menuActiveState, dispatch } = React.useContext(SideMenuContext);
  // const [menuActive, setMenuActive] = React.useState<string>("");
  const menuItems = ["blog", "gallery", "photos", "projects"];

  return (
    <>
      <div
        className={`menu ${
          state.showMenu === "show" ? "show-menu" : "hide-menu"
        }`}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something. . ."
        />
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <>
              <h5
                key={index}
                className="sub-pagetitle underline"
                onClick={() => {
                  if (menuActiveState.menuActive === item) {
                    return dispatch({ type: "", payload: "" });
                  }
                  dispatch({ type: item, payload: item });
                }}
              >
                {capitalizeWord(item)} Overview
              </h5>
              {menuActiveState.menuActive === item && (
                <div className="menu-item-content">asd</div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
