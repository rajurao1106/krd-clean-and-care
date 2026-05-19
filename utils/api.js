// utils/api.js
import axios from 'axios';

// Yahan apna backend link (Base URL) add karein
const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Aapka backend URL
  timeout: 10000, // Agar 10 seconds tak response na aaye toh request cancel ho jaye
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