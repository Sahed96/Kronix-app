import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <p className="nav-title">
          Kro<span className="nix">nix</span>
        </p>
      </div>
      <div className="navList">
        <ul>
          <li>Process</li>
          <li>Benefits</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>FAQ</li>
        </ul>
        <div className="btn1">Get Started</div>
      </div>
    </div>
  );
};

export default Navbar;
