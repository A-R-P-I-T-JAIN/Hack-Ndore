import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Navbar2.css";

const Navbar2 = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();

  const handleLogin = () => {
    // Logic to handle login or show login modal
    login(); // Call login function to update auth state
    navigate("/login");
  };

  const handleLogout = () => {
    // Logic to handle logout
    logout(); // Call logout function to update auth state
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="nav-item" onClick={() => navigate("/")}>Home</span>
        <span className="nav-item" onClick={() => navigate("/help")}>Help</span>
        <span className="nav-item" onClick={() => navigate("/transaction-history")}>Transaction History</span>
        <span className="nav-item" onClick={() => navigate("/dashboard")}>Dashboard</span>
      </div>
      <div className="navbar-right">
        <FaBell className="icon" />
        <FaUser className="icon" />
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: "black",
              margin: 0,
              fontSize: "20px",
              borderRadius: "20px",
              padding: "0 10px",
              marginLeft: "20px",
            }}
          >
            Login/Register
          </button>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "white",
              margin: 0,
              fontSize: "20px",
              borderRadius: "20px",
              padding: "0 10px",
              marginLeft: "20px",
              color:"black"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
