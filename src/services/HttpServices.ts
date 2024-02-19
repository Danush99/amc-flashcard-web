import Axios from 'axios';

export const baseURL = import.meta.env.REACT_APP_BACKEND_URL;

Axios.defaults.withCredentials = true;
const axiosInstance = Axios.create({
  withCredentials: true,
  baseURL: baseURL
});

export default axiosInstance;
