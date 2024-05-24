import React, { useState } from "react";
import Sidebar from "./assets/Components/Sidebar";
import Content from "./assets/Components/Content";
import "./App.css";

function App() {
  const [showCfg, setShowCfg] = useState(true);

  const switchCfgAndRegex = () => {
    setShowCfg((prevShowCfg) => !prevShowCfg);
  };

  return (
    <>
      <Sidebar showCfg={showCfg} switchCfgAndRegex={switchCfgAndRegex} />
      <Content showCfg={showCfg} />
    </>
  );
}

export default App;
