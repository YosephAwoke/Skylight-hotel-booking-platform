import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-3xl font-bold tracking-wide hover:opacity-90 transition-opacity">
          Skylight Hotel
        </Link>
        <div className="space-x-6 text-lg flex items-center">
          <Link to="/rooms" className="hover:underline hover:text-yellow-300 transition-colors">
            Rooms
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <FaUserCircle size={24} />
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signin" className="hover:underline hover:text-yellow-300 transition-colors">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
