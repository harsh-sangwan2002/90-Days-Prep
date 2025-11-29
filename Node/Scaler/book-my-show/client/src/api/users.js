import { axiosInstance } from ".";

export const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/users/register', userData);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post('/users/login', credentials);
        return response.data;
    } catch (error) {
        return error;
    }
};