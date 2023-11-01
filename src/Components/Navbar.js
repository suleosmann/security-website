import React, { useRef, useState, useEffect } from "react";
import "./css/Navbar.css";
import ScrollTo from "./ScrollTo";

function Navbar() {
  const menuCheckboxRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 920px to determine if it's mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    if (menuCheckboxRef.current && menuCheckboxRef.current.checked) {
      menuCheckboxRef.current.checked = false;
    }
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./images/logoicon.png" alt="Logo" />
        </div>
        {isMobile && (
          <input type="checkbox" id="click" ref={menuCheckboxRef} />
        )}
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul className={isMobile && menuCheckboxRef.current?.checked ? "open" : ""}>
          <li onClick={closeMenu}>
            <a href="#">Home</a>
          </li>
          <li onClick={closeMenu}>
            <ScrollTo target="#about-us-section">About</ScrollTo>
          </li>
          <li onClick={closeMenu}>
            <ScrollTo target="#services-section">Services</ScrollTo>
          </li>
          <li onClick={closeMenu}>
            <ScrollTo target="#contact-section"><a className="active">Contact</a></ScrollTo>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
