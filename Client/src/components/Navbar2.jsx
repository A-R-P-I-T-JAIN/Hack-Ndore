import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import './Navbar2.css';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navbar-left">
      <span className="nav-item" onClick={() => navigate('/')} >Home</span>
        <span className="nav-item" onClick={() => navigate('/help')} >Help</span>
        <span className="nav-item">Transaction History</span>
        <span className="nav-item" onClick={() => navigate('/dashboard')}>Dashboard</span>
      </div>
      <div className="navbar-right">
        <FaBell className="icon" color='white'/>
        <FaUser className="icon" color='white'/>
      </div>
    </div>
  );
};

export default Navbar2;
