import axios from "./axiosInstance";

const API = "/categories";

export const createCategoryApi = (data) => axios.post(`${API}/create`, data);

export const getAllCategoriesApi = () => axios.get(API);

export const getCategoryByIdApi = (id) => axios.get(`${API}/${id}`);

export const updateCategoryApi = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteCategoryApi = (id) => axios.delete(`${API}/${id}`);
