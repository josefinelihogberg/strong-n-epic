import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalenderComponent from "../components/CalenderComponent";
import { useState } from "react";
import MyBookingsComponent from "../components/MyBookingsComponent";

const UserBookingPage = () => {
  const [showBookings, setShowBookings] = useState(true);

  const handleBookingClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setShowBookings(false);
  };
  return (
    <div>
      <Header btnText={"Log Out"} />
      <div className="container">
        <div className="my-3 btn btn-primary me-2" onClick={handleBookingClick}>
          My bookings
        </div>
        {showBookings === false && <MyBookingsComponent />}
      </div>
      <CalenderComponent />
      <Footer />
    </div>
  );
};

export default UserBookingPage;
