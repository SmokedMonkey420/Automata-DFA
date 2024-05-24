import React, { useState } from "react";
import Sidebar from "./assets/Components/Sidebar";
import Content from "./assets/Components/Content";
import "./App.css";

function App() {
  const [showCfg, setShowCfg] = useState(true);
  const [result, setResult] = useState("");

  const switchCfgAndRegex = () => {
    setShowCfg((prevShowCfg) => !prevShowCfg);
  };

  return (
    <>
      <Sidebar
        showCfg={showCfg}
        switchCfgAndRegex={switchCfgAndRegex}
        setResult={setResult}
      />
      <Content showCfg={showCfg} result={result} />
    </>
  );
}

export default App;
