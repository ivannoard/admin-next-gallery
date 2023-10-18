import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutContext } from "../../../context/LayoutContext";
import { LoadPage, Menu, Navbar, Sidebar } from "../../globals";
import "./dashboard-layout.scss";

const SecondaryDashboardLayout = () => {
  const { state } = React.useContext(LayoutContext);
  return (
    <>
      <main className="home-wrapper">
        {/* header */}
        <Navbar />
        <div className="content">
          <Sidebar />
          <Menu />
          <div
            className={`secondary-main-content ${
              state.showMenu === "show"
                ? "show-secondary-main-content"
                : "hide-secondary-main-content"
            }`}
          >
            <LoadPage>
              <Outlet />
            </LoadPage>
          </div>
          {/* <BlogPostMenu /> */}
        </div>
      </main>
    </>
  );
};

export default SecondaryDashboardLayout;
