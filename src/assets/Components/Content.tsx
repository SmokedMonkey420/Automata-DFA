import React from "react";
import PdaDfaContainer from "./PdaDfaContainer";
import "./Content.css";
import DFALogic from "./DFALogic";

function Content({ showCfg, inputValue }) {
  const activeDFAId = showCfg ? "DFA1" : "DFA2";
  return (
    <div className="content-container">
      <PdaDfaContainer showCfg={showCfg} />
      <DFALogic activeDFAId={activeDFAId} inputValue={inputValue} />
    </div>
  );
}

export default Content;
