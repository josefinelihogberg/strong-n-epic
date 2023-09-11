import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Activity } from "../types/Activity";

const AdminActivityPage: FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("/api/admin/activities")
      .then((res) => res.json())
      .then((json) => setActivities(json))
      .catch((err) => console.log(err));
  }, []);

  const deleteActivity = async (id: number) => {
    alert("Are you sure you want to delete this activity?");
    try {
      await fetch(`/api/admin/activities/${id}`, { method: "DELETE" });

      setActivities(activities.filter((act) => act.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header btnText={"Log Out"} />
      <div className="container mt-4">
        {activities ? (
          <div>
            <h3>All activities</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Activity Name</th>
                  <th>Activity ID</th>
                  <th>Created Date</th>
                  <th>Scheduled Time</th>
                  <th>Coach</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.title}</td>
                    <td>{activity.id}</td>
                    <td>{activity.created}</td>
                    <td>
                      {activity.day}, {activity.time}
                    </td>
                    <td>{activity.coach}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteActivity(activity.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminActivityPage;
