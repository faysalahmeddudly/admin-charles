import axios from "axios";
import { STORAGE_KEYS } from "../../lib/constants";
import { getStorageItem } from "../../lib/storage";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const auth = getStorageItem(STORAGE_KEYS.AUTH, null);

    if (auth?.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = {
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
      status: error.response?.status || null,
      data: error.response?.data || null,
    };

    return Promise.reject(normalizedError);
  },
);

export default axiosInstance;
