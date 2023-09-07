import React from "react";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  // Handle login logic here
  const handleRegister = async (username: string, password: string) => {
    // Implement your login logic, e.g., make API requests

    console.log(`Registered with username: ${username} and password: ${password}`);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password, role: "USER" }),
      });

      const json = await res.json;
    } catch (err) {
      console.log(err);
    }

    alert("You are successfully registered! Please log in now");

    setTimeout(() => {
      navigate("/login"); // Navigate to the "/login" route
    }, 500);
  };

  return (
    <>
      <Header btnText={"LogIn"} />
      <div
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
        }}
      >
        <RegisterForm onRegister={handleRegister} />
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
