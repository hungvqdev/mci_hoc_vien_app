import axios from "axios";

const axiosClient2 = axios.create({
  baseURL: "https://mcivietnam.com/apis_hocvien/v2",
  // baseURL: "http://127.0.0.1:8000/apis_hocvien/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient2;
