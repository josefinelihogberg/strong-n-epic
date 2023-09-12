import React from "react";
import { useState, useEffect } from "react";
import { User } from "../types/User";
import { Activity } from "../types/Activity";
import PopUpComponent from "../components/abstracts/PopUpComponent";

const MyBookingsComponent: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [userId, setUserId] = useState(null);

  const [showPopUp, setShowPopUp] = useState(false); // State for POP UP visibility
  const [bookingIdToDelete, setBookingIdToDelete] = useState<number | null>(null);

  //Simulate fetching user data from local storage or wherever it's stored
  useEffect(() => {
    const userData = localStorage.getItem("userId"); // Adjust this based on your data storage
    if (userData) {
      setUserId(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    // Fetch user bookings based on the provided userId
    fetch(`/api/user/${userId}/booking`)
      .then((res) => res.json())
      .then((json) => setActivities(json.userBookings.models))
      .catch((err) => console.error(err));
  }, [userId]); // Include userId in the dependency array to re-fetch when it changes
  console.log(activities);

  const openPopUp = (id: number) => {
    setBookingIdToDelete(id);
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setBookingIdToDelete(null);
    setShowPopUp(false);
  };
  const deleteBooking = async (id: number) => {
    try {
      await fetch(`/api/user/bookings/${id}`, { method: "DELETE" });
      setActivities(activities.filter((act) => act.id !== id));
      setShowPopUp(false); // Close the  pop up after deletion
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {activities.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.title} {activity.day} {activity.time} coach: {activity.coach}{" "}
              <button className="btn btn-danger" onClick={() => openPopUp(activity.id)}>
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}

      {showPopUp && (
        <PopUpComponent
          insertText="Are you sure you want to cancel this booking?"
          onOkClick={() => deleteBooking(bookingIdToDelete as number)}
          onCancelClick={closePopUp}
        />
      )}
    </div>
  );
};

export default MyBookingsComponent;
