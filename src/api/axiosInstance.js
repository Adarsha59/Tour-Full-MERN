import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
  timeout: 20000,
});

export default instance;
