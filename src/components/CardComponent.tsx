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

type BookingProps = {
  activityId: number;
  title: string;
  time: string;
  day: string;
};

const Card = ({ activityId, title, time, description, coach, day }: CardProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [activePopup, setActivePopup] = useState("");
  const [confirmPopup, setConfirmPopup] = useState("");

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
    setActivePopup("SelectClass");
  };

  const handleOKClick = async () => {
    setActivePopup("");

    if (user !== null) {
      await bookActivity(activityId);
    }

    setConfirmPopup("");
  };

  const handleCancelClick = () => {
    setActivePopup("");
    setConfirmPopup("");
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

        setActivePopup("");
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
        {activePopup === "SelectClass" && (
          <PopUpComponent
            onOkClick={handleOKClick}
            onCancelClick={handleCancelClick}
            insertText={
              <div>
                <h3>{title}</h3>
                <p>Starts: {time} - be 10min early.</p>
                <p>Coach: {coach}</p>
                <p>{description}</p>
              </div>
            }
          />
        )}
      </div>
      <div>
        {confirmPopup === "ConfirmClass" && (
          <PopUpComponent
            onOkClick={() => user !== null && bookActivity(activityId)}
            onCancelClick={handleCancelClick}
            insertText={
              <div>
                <p>You have now booked</p>
                <h3>{title}</h3>
                <p>
                  at {time} on {day}.
                </p>
                <h4>Welcome!</h4>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Card;
