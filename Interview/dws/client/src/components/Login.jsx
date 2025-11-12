import { useState } from 'react';
import axios from '../utils/axiosInstance';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('/users/login', formData);
            alert('Login successful');
            window.location.href = '/';
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
            <input
                name="email"
                type="email"
                placeholder="Email"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
            />
            <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default Login;
