import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {} from "@tanstack/react-query";
import { useVerify } from "../hooks/auth.hooks";

const BasisRoutes = () => {
  const { data: user, isLoading } = useVerify();
  if (user && !isLoading) return <Navigate to='/tasks' replace />;
  return <Outlet />;
};

export default BasisRoutes;
