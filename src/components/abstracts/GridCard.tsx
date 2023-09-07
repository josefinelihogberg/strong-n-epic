import React from "react";
import exportPasses from "./db";

type DayProps = {
  dayText: string;
  dayString: string;
};

const GridCard = ({ dayText, dayString }: DayProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <p style={{ textAlign: "center" }}>{dayText}</p>
      {exportPasses().map((pass) =>
        pass.day === dayString ? (
          <div
            key={pass.day}
            style={{
              width: "100%",
              background: "orange",
              padding: "5px",
              textAlign: "center",
              borderRadius: "7px",
            }}
          >
            <p>{pass.pass}</p>
            <p>{pass.date}</p>
            <p>{pass.time}</p>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default GridCard;
