import axios from 'axios';

export const baseURL: string = import.meta.env.VITE_APP_BASE_URL
export const apiVerson = 1
export const api = axios.create({
    baseURL: baseURL,
});

// Request interceptor to add authentication headers
api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle request error
        }
        return Promise.reject(error);
    }
);
