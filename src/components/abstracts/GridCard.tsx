import exportPasses from "./db";
import PopUpComponent from "./PopUpComponent";
import { useState } from "react";

type DayProps = {
  dayText: string;
  dayString: string;
};

const GridCard = ({ dayText, dayString }: DayProps) => {
  const [activePopup, setActivePopup] = useState("");

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setActivePopup("SelectPass");
  };

  const handleOKClick = () => {
    console.log("hello");
  };

  const handleCancelClick = () => {
    setActivePopup("");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p style={{ textAlign: "center" }}>{dayText}</p>
        {exportPasses().map((pass) =>
          pass.day === dayString ? (
            <div
              onClick={handleClick}
              key={pass.day}
              style={{
                width: "100px",
                height: "100px",
                background: "orange",
                padding: "5px",
                textAlign: "center",
                borderRadius: "7px",
                fontSize: "0.8rem",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{pass.pass}</p>
              <p>{pass.date}</p>
              <p>{pass.time}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      {activePopup === "SelectPass" && (
        <PopUpComponent
          onOkClick={handleOKClick}
          onCancelClick={handleCancelClick}
          insertText={"You are now booking . Do you want to continue?"}
        />
      )}
      {/* <PopUpComponent
                onOkClick={handleOKClick}
                onCancelClick={handleCancelClick}
                insertText={"You are now booking . Do you want to continue?"}
              />
           */}
    </>
  );
};

export default GridCard;
