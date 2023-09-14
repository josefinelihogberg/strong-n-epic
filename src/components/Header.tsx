import React from "react";
import { useNavigate } from "react-router-dom";
import gym from "../assets/gym.png";

type NavProps = {
  btnText: string; // Change 'String' to 'string' (lowercase)
};

const Header: React.FC<NavProps> = ({ btnText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (btnText === "Login") {
      navigate("/login");
    } else if (btnText === "Log Out") {
      navigate("/");
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
        <img alt="img" src={gym} style={{ width: "60px", height: "60px" }} />
        <h1 className="display5">Strong'n'Epic</h1>
        <input
          placeholder="Search..."
          className="form-control me-2"
          style={{ height: "40px", width: "400px" }}
        />
        <nav>
          <ul className="list-unstyled d-flex gap-3">
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button
          style={{
            margin: "10px",
            width: "9em",
            padding: "15px 30px",
            textAlign: "center",
            transition: "0.5s",
            backgroundSize: "200% auto",
            color: "white",
            borderRadius: "10px",
            display: "block",
            border: "0px",
            fontWeight: "700",
            boxShadow: "0px 0px 14px -7px #f09819",
            backgroundImage: "linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {btnText}
        </button>
      </header>
    </div>
  );
};

export default Header;
