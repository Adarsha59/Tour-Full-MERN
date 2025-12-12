import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 20000,
});

/* ADD TOKEN BEFORE REQUEST */
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});

/* IF TOKEN EXPIRED OR UNAUTHORIZED */
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("userdetails");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default instance;
