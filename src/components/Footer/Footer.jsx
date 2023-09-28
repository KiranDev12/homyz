import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" width={120} alt="" srcset="" />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <a href="">Property</a>
            <a href="">Services</a>
            <a href="">Products</a>
            <a href="">About us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
