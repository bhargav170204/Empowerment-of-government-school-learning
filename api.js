import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Change this if your backend URL is different

// Get token from local storage
const getToken = () => localStorage.getItem('token');

// Configure Axios with authentication headers
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Attach token to requests if available
axiosInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// API Calls
export const registerUser = (userData) => axiosInstance.post('/register', userData);
export const loginUser = (userData) => axiosInstance.post('/login', userData);
export const getUserData = () => axiosInstance.get('/dashboard');

export default axiosInstance;
