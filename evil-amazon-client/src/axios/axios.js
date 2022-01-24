import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err)
);

export default axiosInstance;
