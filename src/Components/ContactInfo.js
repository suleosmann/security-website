import React from "react";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <div className="left-info">
          <div className="info-label">CALL US</div>
          <div className="info-value">+2547123456789</div>
        </div>
      </div>
      <div className="contact-item">
        <div className="right-info">
          <div className="info-label">EMAIL</div>
          <div className="info-value">email@email.co.ke</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
