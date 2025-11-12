import { Link } from 'react-router-dom';
import axios from '../utils/axiosInstance';

const Navbar = () => {
    const handleLogout = async () => {
        try {
            await axios.post('/users/logout');
            alert('Logged out successfully');
            window.location.href = '/login';
        } catch {
            alert('Logout failed');
        }
    };

    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-indigo-600 text-white shadow-md">
            <h1 className="font-bold text-lg">DWS</h1>
            <div className="flex gap-4 items-center">
                <Link to="/register" className="hover:underline">
                    Register
                </Link>
                <Link to="/login" className="hover:underline">
                    Login
                </Link>
                <button
                    onClick={handleLogout}
                    className="bg-white text-indigo-600 px-3 py-1 rounded-lg hover:bg-gray-100 transition-all"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
