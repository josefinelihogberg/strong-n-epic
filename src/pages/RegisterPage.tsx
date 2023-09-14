import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import PopUpComponent from "../components/abstracts/PopUpComponent";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const handleRegister = async (username: string, password: string) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password, role: "USER" }),
      });

      if (response.status === 201) {
        setShowPopUp(true);
      }
    } catch (err) {
      console.log(err);
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
        <RegisterForm onRegister={handleRegister} />
      </div>
      <Footer />
      {showPopUp && (
        <PopUpComponent
          onOkClick={() =>
            setTimeout(() => {
              navigate("/login");
            }, 500)
          }
          onCancelClick={() => navigate("*")}
          insertText="You are successfully registered! Please log in now."
        />
      )}
    </>
  );
};

export default RegisterPage;
