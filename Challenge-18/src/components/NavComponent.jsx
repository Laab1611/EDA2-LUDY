import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Logo.png";
import "../assets/css/NavComponent.css";

const NavComponent = () => {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="logo" className="logo" />
        <p className="textLogo">Challenge-18</p>
      </NavLink>
      <div className="nav-center">
        <NavLink
          exact
          to="/"
          activeClassName="active-link"
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link" className="nav-link">
          About
        </NavLink>
        <div className="dropdown">
          <NavLink
            to="/about"
            activeClassName="active-link"
            className="nav-link dropbtn"
          >
            More <span className="arrow">&#9662;</span>
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/about" className="nav-link-drop">
              About Us
            </NavLink>
            <NavLink to="/about" className="nav-link-drop">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      {state.isAuthenticated ? (
        <div className="user-info">
          <span className="username">Welcome, {state.username}!</span>
          <button onClick={handleLogout} className="login-btn">
            Logout
          </button>
        </div>
      ) : (
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default NavComponent;