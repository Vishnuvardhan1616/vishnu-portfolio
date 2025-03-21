import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create this file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
