import { getTokenCookie } from '@/utils/cookies';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach the JWT token
axiosClient.interceptors.request.use(
  async (config) => {
    // const accessToken = localStorage.getItem('token');
    const token = await getTokenCookie();
    if (token) {
      config.headers['Authorization'] = `Token ${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor to handle 401 errors or refresh logic here

export default axiosClient;
