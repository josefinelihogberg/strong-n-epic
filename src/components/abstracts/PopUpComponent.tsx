import React from "react";

type PopUpProps = {
  onOkClick: Function;
  onCancelClick: Function;
  insertText: string;
};

const PopUpComponent = ({ onOkClick, onCancelClick, insertText }: PopUpProps): JSX.Element => {
  return (
    <div
      style={{
        width: "500px",
        height: "200px",
        position: "absolute",
        zIndex: "100",
        background: "gray",
        color: "white",
      }}
    >
      <p>{insertText}</p>
      <div>
        <button onClick={() => onOkClick()}>Ok</button>
        <button onClick={() => onCancelClick()}>Cancel</button>
      </div>
    </div>
  );
};

export default PopUpComponent;
