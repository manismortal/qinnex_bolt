import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useZustandStore } from '../stores/zustandStore';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { isLoggedIn, user, theme, toggleTheme } = useZustandStore();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 bg-${theme}-surface text-${theme}-text shadow-md transition-colors duration-300`}
      style={parallaxStyle}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Winnix
        </Link>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-sm">Welcome, {user?.username}</span>
              <span className="text-sm">Balance: ${user?.balance}</span>
              <Link to="/profile" className="text-sm hover:underline">
                Profile
              </Link>
              <button onClick={() => {}} className="text-sm hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-sm hover:underline">
                Register
              </Link>
            </>
          )}
          <button onClick={toggleTheme} className="text-sm hover:underline">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
