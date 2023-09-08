import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Activity } from "../types/Activity";

const AdminActivityPage = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("/api/admin/activities")
      .then((res) => res.json())
      .then((json) => setActivities(json))
      .catch((err) => console.log(err));
  }, []);

  console.log(activities);

  const handleClick = () => {
    alert("Are you sure you want to delete this activity?");
  };

  return (
    <div>
      <Header btnText={"Log Out"} />
      {activities ? (
        <div>
          <h3>All activities</h3>
          <table>
            <thead>
              <tr>
                <th>Activity Name</th>
                <th>Activity ID</th>
                <th>Created Date</th>
                <th>Scheduled Time</th>
                <th>Coach</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.title}</td>
                  <td>{activity.id}</td>
                  <td>{activity.createddate}</td>
                  <td>
                    {activity.day}, {activity.time}
                  </td>
                  <td>{activity.coach}</td>
                  <td>
                    <button>Edit</button> <button onClick={handleClick}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default AdminActivityPage;
