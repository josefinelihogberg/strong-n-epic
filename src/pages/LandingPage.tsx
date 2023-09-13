import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import gymImage from "../assets/gym-bg.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <>
      <Header btnText={"Login"} />

      <div
        style={{
          backgroundImage: `url(${gymImage})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjust the height as needed
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)", // White background with some transparency
            padding: "40px 50px", // Adjust padding as needed
            borderRadius: "8px", // Add rounded corners if desired
            textAlign: "center",
            marginTop: "-300px",
          }}
        >
          <h1 className="display-4">Welcome to Strong n' Epics</h1>
          <p>Join our gym chain and get fit!</p>
          <button className="btn btn-dark btn-lg" onClick={handleClick}>
            To membership
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
