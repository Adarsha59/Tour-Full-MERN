import axios from "./axiosInstance";

const API = "/videos";

export const createVideoApi = (data) => axios.post(API, data);
export const getVideosApi = () => axios.get(API);
export const getVideosByPackageApi = (id) => axios.get(`${API}/package/${id}`);
export const deleteVideoApi = (id) => axios.delete(`${API}/${id}`);
export const updateVideoApi = (id, data) => axios.put(`${API}/${id}`, data);
