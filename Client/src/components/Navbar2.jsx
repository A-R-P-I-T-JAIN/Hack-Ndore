import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="nav-item">Help</span>
        <span className="nav-item">Transaction History</span>
        <span className="nav-item">Dashboard</span>
      </div>
      <div className="navbar-right">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar2;
