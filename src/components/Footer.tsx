import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import footerImage from "../assets/footer-img.jpg";

const Footer: React.FC = () => {
  return (
    <div>
      <footer
        className="footer-container"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          display: "flex",
          height: "200px",
          justifyContent: "space-between",
          background: "gray",
          color: "white",
          padding: "1em 2em 2em 2em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <img
            alt="Our Gym Facilities"
            className="footer-img"
            src={footerImage}
            style={{
              width: "150px",
              borderRadius: "3px",
              boxShadow: "2px 2px 2px #454545",
            }}
          ></img>
          <p className="footer-company-info">This is a short company description.</p>
          <p style={{ position: "absolute", bottom: 0, left: "2em" }}>@Strong'n'Epic 2023</p>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              marginTop: "0",
            }}
          >
            <h4>SITEMAP</h4>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              marginTop: "0",
            }}
          >
            <h4>SERVICES</h4>
            <li>Pricing</li>
            <li>Features</li>
            <li>Customers</li>
          </ul>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              marginTop: "0",
            }}
          >
            <h4>HELP</h4>
            <li>Getting started</li>

            <li>FAQs</li>
            <li>Referral program</li>
          </ul>
        </div>
        <div className="icon-container" style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
          <img src={facebook} alt="" style={{ height: "25px", width: "25px" }} />
          <img src={twitter} alt="" style={{ height: "25px", width: "25px" }} />
          <img src={instagram} alt="" style={{ height: "25px", width: "25px" }} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
