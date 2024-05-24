import React from "react";
import PdaDfaContainer from "./PdaDfaContainer";
import "./Content.css";
import DFALogic from "./DFALogic";

function Content({ showCfg, inputValue, result }) {
  const activeDFAId = showCfg ? "DFA1" : "DFA2";
  return (
    <div className="content-container">
      <PdaDfaContainer showCfg={showCfg} activeDFAId={activeDFAId} />
      <DFALogic
        activeDFAId={activeDFAId}
        inputValue={inputValue}
        result={result}
      />
    </div>
  );
}

export default Content;
