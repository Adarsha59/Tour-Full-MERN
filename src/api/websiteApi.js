import axios from "./axiosInstance";

const API = "/website";

export const createContentApi = (data) => axios.post(API, data);
export const getAllContentApi = () => axios.get(API);
export const getContentByIdApi = (id) => axios.get(`${API}/${id}`);
export const updateContentApi = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteContentApi = (id) => axios.delete(`${API}/${id}`);
