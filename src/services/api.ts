import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const fetchMessage = async () => {
    try {
        const response = await api.get('/hello');
        return response.data;
    } catch (error) {
        console.error("API-fel:", error);
        throw error;
    }
}
