import React from "react";
import "./menu.scss";
import { LayoutContext } from "../../../context/LayoutContext";
import { capitalizeWord } from "../../../utils/words";
import { SideMenuContext } from "../../../context/SideMenuContext";

const Menu = () => {
  const { showMenu } = React.useContext(LayoutContext);
  const { menuActive, setMenuActive } = React.useContext(SideMenuContext);
  // const [menuActive, setMenuActive] = React.useState<string>("");
  const menuItems = ["blog", "gallery", "photos", "projects"];

  console.log(menuActive);

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
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <>
              <h5
                key={index}
                className="sub-pagetitle underline"
                onClick={() => {
                  if (menuActive === item) {
                    return setMenuActive("");
                  }
                  setMenuActive(item);
                }}
              >
                {capitalizeWord(item)} Overview
              </h5>
              {menuActive === item && (
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
