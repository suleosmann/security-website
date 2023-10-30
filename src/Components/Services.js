import React from "react";
import Service from "./Service";
import servicedata from "./data/servicedata";
import "./css/services.css";

function Services() {
  return (
    <div className="services-section">
      <h2>Services We Offer</h2>
      <p>Explore the range of security services we provide</p>

      <div className="services-row">
        <Service service={servicedata[0]} />
        <Service service={servicedata[1]} />
      </div>

      <div className="services-row">
        <Service service={servicedata[2]} />
        <Service service={servicedata[3]} />
      </div>
    </div>
  );
}

export default Services;
