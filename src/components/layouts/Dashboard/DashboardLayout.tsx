import { Outlet } from "react-router-dom";
import { LoadPage, Menu, Navbar, Sidebar } from "../../globals";
import "./dashboard-layout.scss";

const DashboardLayout = () => {
  return (
    <>
      <main className="home-wrapper">
        {/* header */}
        <Navbar />
        <div className="content">
          <Sidebar />
          <Menu />
          <div className="main-content">
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
