import axiosInstance from "./axiosConfig";
import { API_ENDPOINTS } from "../../lib/constants";

const authService = {
  async login(credentials) {
    const response = await axiosInstance.post(
      API_ENDPOINTS.ADMIN_LOGIN,
      credentials,
    );

    return response.data;
  },

  async register(payload) {
    const response = await axiosInstance.post(
      API_ENDPOINTS.ADMIN_REGISTER,
      payload,
    );

    return response.data;
  },
};

export default authService;
