import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loginReq, logoutReq, registerReq, verifyReq } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../constant/query_key";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerReq,
    onSuccess: () => navigate("/login"),
    throwOnError: (err) => {
      console.log(err);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginReq,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/tasks");
    },
    throwOnError: (err) => {
      console.log(err);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logoutReq,
    onSuccess: () => {
      queryClient.setQueriesData([QUERY_KEY.user], null);
      queryClient.setQueriesData([QUERY_KEY.tasks], null);
      navigate("/login");
    },
  });
};

export const useVerify = () => {
  const queryClient = useQueryClient();
  const base = queryClient.setQueryData([QUERY_KEY.user]) ?? null;
  const user = useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: verifyReq,
    refetchIntervalInBackground: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    initialData: base ?? null,
    throwOnError: (err) => {
      console.log(err);
    },
  });
  return user ?? null;
};
