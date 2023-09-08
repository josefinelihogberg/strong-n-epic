import React, { useState } from "react";
import { Activity } from "../types/Activity";

interface AddActivityProps {
  addActivity: (activity: Activity) => void;
}

const AddActivityComponent = ({ addActivity }: AddActivityProps) => {
  const initialActivity: Activity = {
    id: 0,
    title: "",
    coach: "",
    day: "Monday",
    created: "",
    time: "",
    description: "",
  };
  const [activity, setActivity] = useState<Activity>(initialActivity);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addActivity(activity);
    alert("You have successfully added an activity!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleReset = (): void => {
    setActivity(initialActivity);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Add Activity</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter activity name..."
            value={activity.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="coach" className="form-label">
            Coach
          </label>
          <input
            type="text"
            className="form-control"
            name="coach"
            placeholder="Enter coach name..."
            value={activity.coach}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Create Date</label>
          <input
            type="text"
            className="form-control"
            name="created"
            placeholder="YYYYMMDD"
            value={activity.created}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Day</label>
          <input
            type="text"
            className="form-control"
            name="day"
            placeholder="Monday..."
            value={activity.day}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="text"
            className="form-control"
            name="time"
            placeholder="HH : MM"
            value={activity.time}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control desc-field"
            name="description"
            placeholder="Enter description..."
            value={activity.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
          <button type="reset" onClick={handleReset} className="btn btn-secondary ms-2">
            Discard changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddActivityComponent;
