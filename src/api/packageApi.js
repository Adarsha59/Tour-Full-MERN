import axios from "./axiosInstance";

const API = "/packages";

export const getPackagesApi = () => axios.get(API);

export const getPackageByIdApi = (id) => axios.get(`${API}/${id}`);

export const createPackageApi = (data) => axios.post(API, data);

export const updatePackageApi = (id, data) => axios.put(`${API}/${id}`, data);

export const deletePackageApi = (id) => axios.delete(`${API}/${id}`);

export const getPackagesByCategoryApi = (categoryId) =>
  axios.get(`${API}/category/${categoryId}`);

/* ✅ FIXED POWER SEARCH */
export const powerfulSearchPackagesApi = (query) =>
  axios.get(`${API}/search/power?q=${query}`);
