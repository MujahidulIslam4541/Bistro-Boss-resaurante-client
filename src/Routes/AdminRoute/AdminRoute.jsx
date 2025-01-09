import React from "react";
import USeAuth from "../../hooks/USeAuth";
import Loader from "../../Components/sectionTitle/Loader/Loader";
import { useLocation } from "react-router-dom";
import UseAdmin from "../../hooks/UseAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = USeAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  if (loading || isAdminLoading) {
    return <Loader></Loader>;
  }

  if (user && isAdmin) {
    return children;
  }

  <Navigator to="/" state={{ from: location }} replace></Navigator>;
};

export default AdminRoute;
