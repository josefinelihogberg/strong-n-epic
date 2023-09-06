import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <div
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
        }}
      >
        <h1>Welcome to Strong n' Epics</h1>
        <p>Join our gym chain and get fit!</p>
        <button onClick={handleClick}>To membership</button>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
