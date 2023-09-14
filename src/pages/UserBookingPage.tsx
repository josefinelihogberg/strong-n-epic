import Header from "../components/Header";
import Footer from "../components/Footer";
import CalenderComponent from "../components/CalenderComponent";
import MyBookingsComponent from "../components/MyBookingsComponent";
import { useState, useEffect } from "react";

const UserBookingPage = () => {
  const [showBookings, setShowBookings] = useState(false);
  const [userId, setUserId] = useState(null);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("userId");
    const guestData = localStorage.getItem("username");
    if (userData) {
      setUserId(JSON.parse(userData));
    }
    if (guestData) {
      setGuestName(guestData);
    }
  }, []);
  const handleBookingClick = () => {
    setShowBookings(!showBookings);
  };
  return (
    <div>
      <Header btnText={"Log Out"} />
      <div className="container mt-4">
        <h4 className="mb-4">Welcome {guestName}&#x1F60A;</h4>
        <button className="btn btn-dark" onClick={handleBookingClick}>
          {showBookings ? "Hide My Bookings" : "Show My Bookings"}
        </button>
        {showBookings && userId && <MyBookingsComponent userId={userId} />}

        <CalenderComponent />
      </div>
      <Footer />
    </div>
  );
};

export default UserBookingPage;
