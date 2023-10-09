import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home, Login } from "../views";

const CantGoBack = () => {
  const auth = localStorage.getItem("data_user");
  return auth ? <Navigate to="/" /> : <Outlet />;
};

const PrivateRoute = () => {
  const auth = localStorage.getItem("data_user");
  return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<CantGoBack />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
