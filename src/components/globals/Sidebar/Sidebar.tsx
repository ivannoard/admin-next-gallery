import { NavLink } from "react-router-dom";
import { sideNav } from "./dummy";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-menus">
          {sideNav.map((item) => (
            <NavLink to={item.path} className="sidebar-menu" key={item.id}>
              {item.icon}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
