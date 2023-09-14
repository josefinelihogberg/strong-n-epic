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

const Card: React.FC<CardProps> = ({ activityId, title, time, description, coach, day }) => {
  const [user, setUser] = useState<User | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId") as number | null;
    if (userId) {
      fetch(`/api/user/${userId}`)
        .then((res) => res.json())
        .then((json) => {
          setUser(json.user);
          if (user) {
            setIsBooked(json.user.activities.includes(activityId) || false);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [activityId]);

  const handleClick: React.MouseEventHandler = (e) => {
    if (!isBooked) {
      setShowPopup(true);
    }
  };

  const handleOKClick = async () => {
    setShowPopup(false);

    if (!isBooked && user !== null) {
      await bookActivity(activityId);
      setIsBooked(true);
    }
  };

  const handleCancelClick = () => {
    setShowPopup(false);
  };

  const bookActivity = async (activityId: number) => {
    try {
      if (user) {
        const response = await fetch(`/api/user/${user.id}/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ activityId }),
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
          <button
            className={`btn ${isBooked ? "btn-secondary" : "btn-primary"}`}
            onClick={handleClick}
            disabled={isBooked}
          >
            {isBooked ? "Booked" : "Book"}
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
