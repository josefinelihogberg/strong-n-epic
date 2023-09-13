import React from "react";
import { useNavigate } from "react-router-dom";
import gym from "../assets/gym.png";

type NavProps = {
  btnText: String;
};

const Header: React.FC<NavProps> = ({ btnText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (btnText === "Login") {
      navigate("/login");
    } else if (btnText === "Log Out") {
      navigate("*");
      localStorage.removeItem("username");
    }
  };
  return (
    <div>
      <header
        style={{
          background: "lightgray",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img alt="img" src={gym} style={{ width: "60px", height: "60px" }}></img>
        <h1 className="display5">Strong'n'Epic</h1>
        <input
          placeholder="Search..."
          className="form-control me-2 "
          style={{ height: "40px", width: "400px" }}
        ></input>
        <nav>
          <ul className="list-unstyled d-flex gap-3">
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="btn btn-primary" onClick={handleClick}>
          {btnText}
        </button>
      </header>
    </div>
  );
};

export default Header;
