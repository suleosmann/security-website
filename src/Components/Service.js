import React from "react";
import "./css/services.css"; // Import the Service component styles

function Service({ service }) {
    return (
      <div className="service">
        <div className="service-icon">
          <img src={service.imageUrl} alt={service.title} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    );
  }

export default Service;
