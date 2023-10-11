import { NavLink } from "react-router-dom";
import { sideNav } from "./dummy";
import "./sidebar.scss";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { capitalizeWord } from "../../../utils/words";
const Sidebar = () => {
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
              <NavLink to={item.path} className="sidebar-menu" key={item.id}>
                {item.icon}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
