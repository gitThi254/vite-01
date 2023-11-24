import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useVerify } from "../hooks/auth.hooks";

const BasisRoutes = () => {
  const { data: user } = useVerify();
  if (user) return <Navigate to='/tasks' replace />;
  return <Outlet />;
};

export default BasisRoutes;
