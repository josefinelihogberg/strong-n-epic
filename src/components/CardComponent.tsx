import React, { useState, useEffect } from "react";
import PopUpComponent from "./abstracts/PopUpComponent";
import { User } from "../types/User";

type CardProps = {
  activityId: number;
  title: string;
  time: string;
  description: string;
  coach: string;
  day: string;
};

const Card = ({ activityId, title, time, description, coach, day }: CardProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Fetch the complete user object based on the user ID
      fetch(`/api/user/${userId}`)
        .then((res) => res.json())
        .then((json) => setUser(json.user))
        .catch((err) => console.error(err));
    }
  }, []);

  const handleClick: React.MouseEventHandler = (e) => {
    setShowPopup(true);
  };

  const handleOKClick = async () => {
    setShowPopup(false);

    if (user !== null) {
      await bookActivity(activityId);
    }

    setShowPopup(false);
  };

  const handleCancelClick = () => {
    setShowPopup(false);
  };

  const bookActivity = async (activityId: number) => {
    try {
      if (user) {
        // Send the activityId to the server for booking
        const response = await fetch(`/api/user/${user.id}/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ activityId }), // Send the activityId in the request body
        });

        setShowPopup(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="card" style={{ width: "9rem", margin: ".2em .2em -0.2em .2em" }}>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{time}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            Book
          </button>
        </div>
      </div>
      <div>
        {showPopup && (
          <PopUpComponent
            onOkClick={handleOKClick}
            onCancelClick={handleCancelClick}
            insertText={
              <div>
                <h3>{title}</h3>
                <p>Starts: {time}</p>
                <p>Day: {day}</p>
                <p>Coach: {coach}</p>
                <p>{description}</p>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Card;
