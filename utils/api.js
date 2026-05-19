// utils/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://krd-admin-backend-five.vercel.app', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Agar aapko requests ke sath JWT Token bhejna hai, toh aap interceptors use kar sakte hain
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;