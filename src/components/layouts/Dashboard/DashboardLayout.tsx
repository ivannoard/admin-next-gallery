import React from "react";
import { Outlet } from "react-router-dom";
import { LoadPage, Menu, Navbar, Sidebar } from "../../globals";
import "./dashboard-layout.scss";
import { LayoutContext } from "../../../context/LayoutContext";

const DashboardLayout = () => {
  const { showMenu } = React.useContext(LayoutContext);
  console.log(showMenu);
  return (
    <>
      <main className="home-wrapper">
        {/* header */}
        <Navbar />
        <div className="content">
          <Sidebar />
          <Menu />
          <div
            className={`main-content ${
              showMenu === "show" ? "show-main-content" : "hide-main-content"
            }`}
          >
            <LoadPage>
              <Outlet />
            </LoadPage>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
