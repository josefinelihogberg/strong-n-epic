import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalenderComponent from "../components/CalenderComponent";

const UserBookingPage = () => {
  return (
    <div>
      <Header btnText={"Logout"} />
      <h1>UserBooking Page</h1>
      <CalenderComponent />
      <Footer />
    </div>
  );
};

export default UserBookingPage;
