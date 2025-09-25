import axios from 'axios';
import { notifyService } from '@/services/notifyService';
const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
    throw new Error('VITE_API_URL is not defined in .env');
}
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.response.use((response) => response, (error) => {
    console.error('API Error:', error);
    const message = error.response?.data?.message ||
        error.message ||
        'Произошла ошибка при запросе';
    console.log(message);
    notifyService.show({ message, type: 'error', duration: 4000 });
    return Promise.reject(error);
});
export default api;
