import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useVerify } from "../hooks/auth.hooks";

const ProtectRoutes = () => {
  const { data: user, isLoading } = useVerify();
  if (isLoading) return <p>loading...</p>;

  if (!user && !isLoading) return <Navigate to='/login' replace />;
  return <Outlet />;
};

export default ProtectRoutes;
