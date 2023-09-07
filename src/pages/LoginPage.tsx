import React from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // Handle login logic here
  const handleLogin = (username: string, password: string) => {
    // Implement your login logic, e.g., make API requests
    console.log(`Logged in with username: ${username} and password: ${password}`);
    if (username === "Adam") navigate("/userbooking");

    if (username === "Bob") navigate("/admin");
  };

  return (
    <>
      <Header btnText={"Login"} />
      <div
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
        }}
      >
        <LoginForm onLogin={handleLogin} />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
