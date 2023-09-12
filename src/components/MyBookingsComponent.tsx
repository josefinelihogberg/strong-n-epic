import React from "react";
import { useState, useEffect } from "react";
import { User } from "../types/User";
import { Activity } from "../types/Activity";

const MyBookingsComponent: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [userId, setUserId] = useState(null);
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
  return (
    <div>
      <h2>My Bookings</h2>
      {activities.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.title} {activity.day} {activity.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookingsComponent;
