import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Broomsville Surveillance | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
