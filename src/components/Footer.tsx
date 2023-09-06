import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer-container"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          display: "flex",
          height: "250px",
          justifyContent: "space-between",
          background: "darkgray",
          padding: "1em",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
          <img alt="Our Gym Facilities" className="footer-img"></img>
          <p className="footer-company-info">This is a short company description.</p>
          <p>@Strong'n'Epic 2023</p>
        </div>
        <div>
          <h4>SITEMAP</h4>
          Nav
        </div>
        <div>
          <h4>SERVICE</h4>
          Nav
        </div>
        <div>
          <h4>HELP</h4>
          Nav
        </div>
        <div className="icon-container" style={{ display: "flex", gap: "1em" }}>
          <img src={facebook} alt="" style={{ height: "25px", width: "25px" }} />
          <img src={twitter} alt="" style={{ height: "25px", width: "25px" }} />
          <img src={instagram} alt="" style={{ height: "25px", width: "25px" }} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
