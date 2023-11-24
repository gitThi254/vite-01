import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useVerify } from "../hooks/auth.hooks";

const ProtectRoutes = () => {
  const { data: user } = useVerify();
  if (!user) return <Navigate to='/login' replace />;
  return <Outlet />;
};

export default ProtectRoutes;
