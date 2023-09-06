import React from "react";

type PopUpProps = {
  onOkClick: Function;
  onCancelClick: Function;
  insertText: string;
};

const PopUpComponent = ({ onOkClick, onCancelClick, insertText }: PopUpProps): JSX.Element => {
  return (
    <div style={{ width: "700px", height: "300px" }}>
      <p>{insertText}</p>
      <div>
        <button onClick={onOkClick()}>Ok</button>
        <button onClick={onCancelClick()}>Cancel</button>
      </div>
    </div>
  );
};

export default PopUpComponent;
