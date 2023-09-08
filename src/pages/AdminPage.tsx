import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddActivityComponent from "../components/AddActivityComponent";
import { Activity } from "../types/Activity";

const AdminPage = () => {
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

      <AddActivityComponent addActivity={handleAddActivity} />
      <Footer />
    </div>
  );
};

export default AdminPage;
