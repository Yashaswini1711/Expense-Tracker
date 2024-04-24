import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8086/api',
  withCredentials: true, // Include credentials (cookies) in requests
});

export default axiosInstance;
