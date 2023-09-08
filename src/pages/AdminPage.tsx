import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddActivityComponent from "../components/AddActivityComponent";
import { Activity } from "../types/Activity";

const AdminPage = () => {
  const navigate = useNavigate();

  const getUsers = () => {
    navigate("/admin/user");
  };

  const getActivities = () => {
    navigate("/admin/activity");
  };

  const handleAddActivity = async (activity: Activity) => {
    try {
      const res = await fetch("api/admin/activity", {
        method: "POST",
        body: JSON.stringify(activity),
      });

      const json = await res.json;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header btnText={"Log Out"} />

      <div>
        <button onClick={getActivities}>Gym Activities</button>
        <button onClick={getUsers}>Members</button>
      </div>

      <AddActivityComponent addActivity={handleAddActivity} />
      <Footer />
    </div>
  );
};

export default AdminPage;
