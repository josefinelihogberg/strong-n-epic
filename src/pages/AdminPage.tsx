import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddPassComponent from "../components/AddPassComponent";

const AdminPage = () => {
  const handleAddPass = (
    title: string,
    coach: string,
    date: string,
    time: string,
    description: string
  ) => {
    // make API post request
  };
  return (
    <div>
      <Header btnText={"Log Out"} />

      <AddPassComponent />
      <Footer />
    </div>
  );
};

export default AdminPage;
