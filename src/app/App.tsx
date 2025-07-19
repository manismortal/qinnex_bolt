import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Sidebar from '../components/Sidebar';
import { useZustandStore } from '../stores/zustandStore';

const App: React.FC = () => {
  const { theme } = useZustandStore();

  return (
    <div className={`bg-${theme}-background text-${theme}-text min-h-screen transition-colors duration-300`}>
      <Router>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="mt-20 ml-64 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
