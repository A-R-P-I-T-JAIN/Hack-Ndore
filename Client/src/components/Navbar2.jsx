import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar2.css';

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="nav-item" onClick={() => navigate('/')}>Home</span>
        <span className="nav-item" onClick={() => navigate('/help')}>Help</span>
        <span className="nav-item" onClick={() => navigate('/transaction-history')}>Transaction History</span>
        <span className="nav-item" onClick={() => navigate('/dashboard')}>Dashboard</span>
      </div>
      <div className="navbar-right">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </nav>
  );
};

export default Navbar2;
