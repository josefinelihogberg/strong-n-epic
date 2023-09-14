import React from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccessfulLogin = (role: string) => {
    if (role === "ADMIN") {
      navigate("/admin");
    } else if (role === "USER") {
      navigate("/userbooking");
    }
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 201) {
        const data = await response.json();
        const user = data.user;

        if (user && user.id) {
          const id = user.id;
          const username = user.username;

          localStorage.setItem("username", username);
          localStorage.setItem("userId", id);
          handleSuccessfulLogin(user.role);
        } else {
          console.log("Login failed: Invalid user data");
        }
      } else {
        console.log("Login failed: Response status is not 201");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
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
