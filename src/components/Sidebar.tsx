import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-surface w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-text hover:text-primary">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/profile" className="text-text hover:text-primary">
            Profile
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/login" className="text-text hover:text-primary">
            Login
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/register" className="text-text hover:text-primary">
            Register
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/vip" className="text-text hover:text-primary">
            VIP Lounge
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/service" className="text-text hover:text-primary">
            Service Center
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
