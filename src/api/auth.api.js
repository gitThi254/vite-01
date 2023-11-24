import axios from "./axios";

export const registerReq = (data) =>
  axios.post("/users/register", data).then((res) => res.data);

export const loginReq = (data) =>
  axios.post("/users/login", data).then((res) => res.data);

export const verifyReq = () =>
  axios.get("/users/verify").then((res) => res.data);

export const logoutReq = () => axios.post("/users/logout");
