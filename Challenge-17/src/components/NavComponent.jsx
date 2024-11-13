import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/NavComponent.css";
import logo from "../assets/Logo.png";

class NavComponent extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <NavLink to="/" className="nav-logo">
          <img src={logo} alt="logo" className="logo" />
          <p className="textLogo">Challenge-17</p>
        </NavLink>
        <div className="nav-center">
          <NavLink exact to="/" activeClassName="active-link" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link" className="nav-link">
            About
          </NavLink>
          <div className="dropdown">
            <NavLink to="/more" activeClassName="active-link" className="nav-link dropbtn">
              More <span className="arrow">&#9662;</span>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/contact" className="nav-link-drop">
                About Us
              </NavLink>
              <NavLink to="/faq" className="nav-link-drop">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </nav>
    );
  }
}

export default NavComponent;