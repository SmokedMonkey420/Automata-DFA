// ToggleButton.js
import React from "react";
import * as GoIcons from "react-icons/go";

function ToggleButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <GoIcons.GoArrowSwitch />
    </button>
  );
}

export default ToggleButton;
