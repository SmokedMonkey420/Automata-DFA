import React, { useState } from "react";
import Sidebar from "./assets/Components/Sidebar";
import Content from "./assets/Components/Content";
import "./App.css";

function App() {
  const [showCfg, setShowCfg] = useState(true);
  const [inputValue, setInputValue] = useState(""); // Add inputValue state

  const switchCfgAndRegex = () => {
    setShowCfg((prevShowCfg) => !prevShowCfg);
  };

  return (
    <>
      <Sidebar
        showCfg={showCfg}
        switchCfgAndRegex={switchCfgAndRegex}
        inputValue={inputValue} // Pass inputValue
        setInputValue={setInputValue} // Pass setInputValue
      />
      <Content showCfg={showCfg} inputValue={inputValue} />
    </>
  );
}

export default App;
