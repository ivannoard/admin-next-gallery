import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { LayoutContext } from "../../../context/LayoutContext";
import { capitalizeWord } from "../../../utils/words";
import { sideNav } from "./dummy";
import "./sidebar.scss";
const Sidebar = () => {
  const { state, dispatch } = React.useContext(LayoutContext);
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-menus">
          {sideNav.map((item) => (
            <div
              key={item.name}
              data-tooltip-id={item.name}
              data-tooltip-content={capitalizeWord(item.name)}
              data-tooltip-place="right"
              className="custom-tooltip"
            >
              <Tooltip id={item.name} />
              <NavLink to={item.path} className="button-icon" key={item.id}>
                {item.icon}
              </NavLink>
            </div>
          ))}
          <div
            data-tooltip-id={"show-menu"}
            data-tooltip-content={capitalizeWord("show menu")}
            data-tooltip-place="right"
            className="custom-tooltip button-icon"
            onClick={() =>
              dispatch({
                type: state.showMenu === "show" ? "hide" : "show",
                payload: state.showMenu === "show" ? "hide" : "show",
              })
            }
          >
            <Tooltip id={"show-menu"} />
            <BsThreeDots />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
