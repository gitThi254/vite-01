import axios from "axios";
const API_URL = "https://nodejs-seven-delta.vercel.app/api/v1";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
