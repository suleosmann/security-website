import React from "react";
import './css/ContactInfo.css'
function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <div className="left-info">
          <div className="info-label">CALL US</div>
          <div className="info-value">+254722311294</div>
        </div>
      </div>
      <div className="contact-item">
        <div className="right-info">
          <div className="info-label">EMAIL</div>
          <div className="info-value">contact@broomsvillesurveillance.co.ke</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
