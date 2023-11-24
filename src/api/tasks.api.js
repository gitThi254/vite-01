import axios from "./axios";
export const getTasksReq = () => axios.get("/tasks").then((res) => res.data);

export const createTaskReq = (data) =>
  axios.post("/tasks", data).then((res) => res.data);
export const updateTaskReq = ({ id, data }) =>
  axios.put(`/tasks/${id}`, data).then((res) => res.data);

export const deleteTaskReq = (id) =>
  axios.delete(`/tasks/${id}`).then((res) => res.data);

export const getTask = (id) =>
  axios.get(`/tasks/${id}`).then((res) => res.data);
