import React from "react";

type PopUpProps = {
  onOkClick: Function;
  onCancelClick: Function;
  insertText: string | JSX.Element;
};

const PopUpComponent = ({ onOkClick, onCancelClick, insertText }: PopUpProps): JSX.Element => {
  return (
    <div
      style={{
        width: "500px",
        height: "250px",
        position: "absolute",
        zIndex: "100",
        background: "gray",
        color: "white",
        top: "22%",
        left: "25%",
        borderRadius: "7px",
        boxShadow: "2px 2px 1px gray",
        padding: "1em 2em 1em 2em",
        textAlign: "center",
      }}
    >
      <div>{insertText}</div>
      <div style={{ position: "absolute", top: "70%", left: "33%" }}>
        <button onClick={() => onCancelClick()}>Cancel</button>
        <button onClick={() => onOkClick()}>Confirm</button>
      </div>
    </div>
  );
};

export default PopUpComponent;
