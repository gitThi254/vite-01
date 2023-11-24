import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../constant/query_key";
import {
  createTaskReq,
  deleteTaskReq,
  getTask,
  getTasksReq,
  updateTaskReq,
} from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

export const useTasks = () => {
  return useQuery({
    queryKey: [QUERY_KEY.tasks],
    queryFn: getTasksReq,
  });
};

export const useCreatTask = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTaskReq,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.tasks], (old) => {
        const newTasks = old.push(data);
        return newTasks;
      });
    },
    onSettled: () => navigate("/tasks"),
    throwOnError: (err) => {
      console.log(err);
    },
  });
};

export const useUpdateTask = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTaskReq,
    onSettled: () => navigate("/tasks"),
    throwOnError: (err) => {
      console.log(err);
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTaskReq,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["tasks"]);
    },
    throwOnError: (err) => {
      console.log(err);
    },
  });
};

export const useGetTask = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [QUERY_KEY.tasks, id],
    queryFn: () => getTask(id),
    initialData: () => {
      console.log(queryClient.getQueryData([QUERY_KEY.tasks]));
    },
  });
};
