import React, { useState, useEffect } from "react";
import "./AddPassComponent.css";

import { Pass } from "../types/Pass";

const AddPassComponent = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.users))
      .catch((err) => console.log(err));
  }, []);

  const [pass, setPass] = useState<Pass>({
    title: "",
    coach: "",
    date: "",
    time: "",
    description: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // should make API request by calling adminService.addPass
    // addPass (pass);
    // if succeed
    alert("You have successfully added a pass!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <h3>Add Pass</h3>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="write pass name..."
            value={pass.title}
            onChange={handleChange}
          />

          <label>Coach</label>
          <input
            type="text"
            name="coach"
            placeholder="write coach name..."
            value={pass.coach}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Date</label>
          <input
            type="text"
            name="date"
            placeholder="MM / DD / YYYY"
            value={pass.date}
            onChange={handleChange}
          />

          <label>Time</label>
          <input
            type="text"
            name="time"
            placeholder="HH : MM"
            value={pass.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            className="desc-field"
            name="description"
            type="text"
            value={pass.description}
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

export default AddPassComponent;
