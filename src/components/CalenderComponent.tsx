import React from "react";
import GridCard from "./abstracts/GridCard";

const CalenderComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <GridCard dayText="mon" dayString="monday" />
      <GridCard dayText="tues" dayString="tuesday" />
      <GridCard dayText="wed" dayString="wednesday" />
      <GridCard dayText="thur" dayString="thursday" />
      <GridCard dayText="fri" dayString="friday" />
      <GridCard dayText="sat" dayString="saturday" />
      <GridCard dayText="sun" dayString="sunday" />
    </div>
  );
};

export default CalenderComponent;
