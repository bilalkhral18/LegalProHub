import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;
  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateAdminRoute;
