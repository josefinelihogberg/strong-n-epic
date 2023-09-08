import React, { useState, useEffect } from "react";
import "./AddActivityComponent.css";

import { Activity } from "../types/Activity";

interface AddActivityProps {
  addActivity: (activity: Activity) => void;
}

const AddActivityComponent = ({ addActivity }: AddActivityProps) => {
  const [activity, setActivity] = useState<Activity>({
    title: "",
    coach: "",
    day: " ",
    date: "",
    time: "",
    description: "",
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addActivity(activity);

    alert("You have successfully added a pass!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <h3>Add Activity</h3>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="write pass name..."
            value={activity.title}
            onChange={handleChange}
          />

          <label>Coach</label>
          <input
            type="text"
            name="coach"
            placeholder="write coach name..."
            value={activity.coach}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Day</label>
          <input
            type="text"
            name="day"
            placeholder="Monday..."
            value={activity.day}
            onChange={handleChange}
          />

          <label>Date</label>
          <input
            type="text"
            name="date"
            placeholder="YYYYMMDD"
            value={activity.date}
            onChange={handleChange}
          />

          <label>Time</label>
          <input
            type="text"
            name="time"
            placeholder="HH : MM"
            value={activity.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            className="desc-field"
            name="description"
            type="text"
            value={activity.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Save changes</button>
          <button type="reset">Discard changes</button>
        </div>
      </form>
    </div>
  );
};

export default AddActivityComponent;
