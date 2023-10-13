import { AnimatePresence } from "framer-motion";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { DashboardLayout } from "../components/layouts";
import {
  Blog,
  BlogAdd,
  Dashboard,
  Gallery,
  Login,
  Photos,
  Settings,
} from "../views";

const CantGoBack = () => {
  const auth = localStorage.getItem("data_user");
  return auth ? <Navigate to="/" replace /> : <Outlet />;
};

const PrivateRoute = () => {
  const auth = localStorage.getItem("data_user");
  return auth ? <Outlet /> : <Navigate to="/auth/login" replace />;
};
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route element={<CantGoBack />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route element={<PrivateRoute />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/add" element={<BlogAdd />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
