import React from "react";
import "./Sidebar.css";
import Cfgbox from "./Cfgbox";
import Regex from "./Regex";
import ToggleButton from "./ToggleButton";
import DFALogic from "./DFALogic";

function Sidebar({ showCfg, switchCfgAndRegex, inputValue, setInputValue }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update inputValue state
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <h1>Regex Simulator</h1>
          <Regex showCfg={showCfg} />
          <ul className="input-box">
            <li>
              <input
                type="text"
                placeholder="Enter string..."
                id="inputString"
                value={inputValue}
                onChange={handleInputChange}
              />
            </li>
            <li>
              <div id="result"></div>
            </li>
            <li>
              <button>Validate</button>
            </li>
            <li>
              <button>Simulate</button>
            </li>
            <div className="switch-button-container">
              <ToggleButton onClick={switchCfgAndRegex} />
            </div>
          </ul>
          <Cfgbox showCfg={showCfg} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
