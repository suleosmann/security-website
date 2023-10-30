import React from "react";
import "./css/Navbar.css";
import ScrollTo from "./ScrollTo";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./images/logoicon.png" alt="Logo" />
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <ScrollTo target="#about-us-section">About</ScrollTo>
          </li>
          <li>
            <ScrollTo target="#services-section">Services</ScrollTo>
          </li>
          <li>
            <ScrollTo target="#contact-section"><a className="active">Contact</a></ScrollTo>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
