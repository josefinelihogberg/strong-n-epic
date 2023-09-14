import React, { useState, useEffect } from "react";
import { Activity } from "../types/Activity";
import PopUpComponent from "../components/abstracts/PopUpComponent";

interface MyBookingsProps {
  userId: number;
}

const MyBookingsComponent: React.FC<MyBookingsProps> = ({ userId }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [activityIdToDelete, setActivityIdToDelete] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/user/${userId}/bookings`)
      .then((res) => res.json() as Promise<{ activities: Activity[] }>)
      .then((json) => {
        setActivities(json.activities);
      })
      .catch((err) => console.error(err));
  }, [userId]);

  const openPopUp = (id: number) => {
    setActivityIdToDelete(id);
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setActivityIdToDelete(null);
    setShowPopUp(false);
  };

  const deleteBooking = async (activityIdToDelete: number | null) => {
    if (activityIdToDelete === null) return;
    try {
      await fetch(`/api/user/${userId}/bookings/${activityIdToDelete}`, { method: "DELETE" });
      setActivities((prevActivities) =>
        prevActivities.filter((act) => act.id !== activityIdToDelete)
      );
      setShowPopUp(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">My Bookings</h2>
      {activities.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="list-group">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{activity.title}</strong>
                <br />
                {activity.day} {activity.time}, Coach: {activity.coach}
              </div>
              <button onClick={() => openPopUp(activity.id)} className="btn btn-danger">
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}

      {showPopUp && (
        <PopUpComponent
          insertText="Are you sure you want to cancel this booking?"
          onOkClick={() => deleteBooking(activityIdToDelete as number)}
          onCancelClick={closePopUp}
        />
      )}
    </div>
  );
};

export default MyBookingsComponent;
