import Axios from 'axios';

export const baseURL = import.meta.env.REACT_APP_BACKEND_URL;

Axios.defaults.withCredentials = false;
const axiosInstance = Axios.create({
  withCredentials: false,
  baseURL: baseURL
});

export default axiosInstance;
