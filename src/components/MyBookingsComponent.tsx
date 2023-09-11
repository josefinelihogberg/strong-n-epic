import React from "react";
import { useState, useEffect } from "react";
import { User } from "../types/User";

const MyBookingsComponent = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/user/booking")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => console.log(err));
    console.log(users);
  }, []);
  return (
    <div>
      <p>My bookings</p>
      {users.map((user) => (
        <div key={user.id}>{user.activities}</div>
      ))}
    </div>
  );
};

export default MyBookingsComponent;
