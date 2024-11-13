import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/NavBarStyle.css";

function NavBar() {
  return (
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link" activeClassName="active">
            Home
          </Link>
          <Link to="/todo" className="nav-link" activeClassName="active">
            Todo App
          </Link>
          <Link to="/hooks" className="nav-link" activeClassName="active">
            Pokemón
          </Link>
        </nav>
      </div>
  );
}

export default NavBar;
