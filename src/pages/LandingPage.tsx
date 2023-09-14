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
          backgroundImage: `url(${gymImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "40px 50px",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "-300px",
          }}
        >
          <h1 className="display-4">Welcome to Strong n' Epics</h1>
          <p>Join our gym chain and get fit!</p>
          <button
            style={{
              cursor: "pointer",
              border: "0",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "500",
              margin: "0 10px",
              width: "220px",
              padding: "8px 0",
              boxShadow: "0 0 20px rgba(104, 85, 224, 0.2)",
              color: "white",
              backgroundColor: "#0b090a",
            }}
            onClick={handleClick}
          >
            To membership
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
