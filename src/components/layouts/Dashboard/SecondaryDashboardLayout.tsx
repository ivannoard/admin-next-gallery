import React from "react";
import { Outlet } from "react-router-dom";
import { BlogPostMenu, LoadPage, Menu, Navbar, Sidebar } from "../../globals";
import "./dashboard-layout.scss";
import { LayoutContext } from "../../../context/LayoutContext";

const SecondaryDashboardLayout = () => {
  const { showMenu } = React.useContext(LayoutContext);
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
              showMenu === "show"
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
