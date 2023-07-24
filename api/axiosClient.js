import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://127.0.0.1:8000/apis/v1",
  baseURL: "https://mcivietnam.com/apis/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { config, status } = error.response;
    if (config.url === "/auth/regiter" && status === 400) {
      throw new Error("Địa chỉ email đã được đăng ký");
    }
    if (config.url === "/auth/login" && status === 400) {
      throw new Error("Sai tên tài khoản hoặc mật khẩu");
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
