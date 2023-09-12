import React from "react";
import { useState, useEffect } from "react";
import PopUpComponent from "./abstracts/PopUpComponent";
import { Activity } from "../types/Activity";

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
  const [userId, setUserId] = useState(null);

  const [activePopup, setActivePopup] = useState("");
  const [confirmPopup, setConfirmPopup] = useState("");
  const [color, setColor] = useState("orange");
  const [isBooked, setIsBooked] = useState(false);

  //Simulate fetching user data from local storage or wherever it's stored
  useEffect(() => {
    const userData = localStorage.getItem("userId"); // Adjust this based on your data storage
    if (userData) {
      setUserId(JSON.parse(userData));
    }
  }, []);

  const handleClick: React.MouseEventHandler = (e) => {
    setActivePopup("SelectClass");
  };

  const handleOKClick = () => {
    setActivePopup("");
    setConfirmPopup("ConfirmClass");
  };

  const handleCancelClick = () => {
    window.location.reload();
    setActivePopup("");
  };

  const handleBooking = async (activityId: number) => {
    try {
      fetch(`api/user/${userId}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activityId }),
      });
    } catch (err) {
      console.log(err);
    }

    setConfirmPopup("");
    setColor("rgb(24,156,245)");
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
            onOkClick={() => handleBooking(activityId)}
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
