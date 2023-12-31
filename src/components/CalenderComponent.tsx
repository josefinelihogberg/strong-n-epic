import React from "react";
import GridCard from "./GridCardComponent";

const CalenderComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "68%",
        margin: "3em auto",
        gap: "",
      }}
    >
      <GridCard dayText="Mon" dayString="Monday" />
      <GridCard dayText="Tues" dayString="Tuesday" />
      <GridCard dayText="Wed" dayString="Wednesday" />
      <GridCard dayText="Thur" dayString="Thursday" />
      <GridCard dayText="Fri" dayString="Friday" />
      <GridCard dayText="Sat" dayString="Saturday" />
      <GridCard dayText="Sun" dayString="Sunday" />
    </div>
  );
};

export default CalenderComponent;
