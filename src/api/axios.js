import axios from "axios";
const API_URL = "http://localhost:4000/api/v1";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
