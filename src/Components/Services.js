import React from "react";
import Service from "./Service";
import servicedata from "./data/servicedata";
import "./css/services.css";

function Services() {
  return (
    <div id="services-section" className="services-section">
      <h2>Services We Offer</h2>
      <p>Explore the range of security services we provide</p>

      <div className="services-row">
        <Service service={servicedata[0]} />
        <Service service={servicedata[1]} />
        <Service service={servicedata[7]} />
      </div>

      <div className="services-row">
        <Service service={servicedata[9]} />
        <Service service={servicedata[3]} />
        <Service service={servicedata[8]} />
      </div>
      <div className="services-row">
        <Service service={servicedata[4]} />
        <Service service={servicedata[5]} />
        <Service service={servicedata[6]} />
      </div>
      <div className="services-row">
        <Service service={servicedata[2]} />
      </div>
    </div>
  );
}

export default Services;
