import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <div className="logo">
            <img src="./logoicon.png"/>
        </div>
        </div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
