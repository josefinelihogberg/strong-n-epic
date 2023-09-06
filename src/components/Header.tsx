import React from "react";
import gym from "../assets/gym.png";

const Header = () => {
  return (
    <div>
      <header
        style={{
          background: "darkgray",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "1em",
        }}
      >
        <img alt="img" src={gym} style={{ width: "60px", height: "60px" }}></img>
        <h1 style={{}}>Strong'n'Epic</h1>
        <input
          placeholder="Search..."
          style={{
            borderRadius: "5px",
            height: "25px",
            width: "300px",
            border: "1px solid gray",
            paddingLeft: "1ems",
          }}
        ></input>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", fontSize: "0.9rem", gap: "1em" }}>
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button>Login</button>
      </header>
    </div>
  );
};

export default Header;
