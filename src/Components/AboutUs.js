import React from "react";
import './css/AboutUs.css'


function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-card top-card about-card-hover">
        <h2>About Us</h2>
        <p>
          At Broomsville Surveillance, we specialize in providing cutting-edge security solutions tailored to meet your unique needs. With years of expertise, we are committed to ensuring the safety and security of your home, business, and assets.
        </p>
      </div>
      <div className="mission-choose-container">
        <div className="about-card about-card-hover">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to delivering the highest quality security services and products. Our mission is to provide peace of mind to our clients through innovative security solutions and unwavering commitment.
          </p>
        </div>
        <div className="about-card about-card-hover">
          <h2>Why Choose Us</h2>
          <p>
            <ul>
              <li><span>Experienced Professionals</span>: Our team comprises highly skilled and experienced security experts.</li>
              <li><span>Tailored Solutions</span>: We customize security solutions to meet your specific requirements.</li>
              <li><span>Cutting-Edge Technology</span>: We stay at the forefront of security technology to protect what matters most.</li>
              <li><span>24/7 Support</span>: Our dedicated team provides round-the-clock support and monitoring.</li>
              <li><span>Client-Centric Approach</span>: Your safety is our top priority.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
