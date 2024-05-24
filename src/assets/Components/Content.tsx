import React from "react";
import PdaDfaContainer from "./PdaDfaContainer";
import "./Content.css";

function Content({ showCfg }) {
  return (
    <div className="content-container">
      <PdaDfaContainer showCfg={showCfg} />
    </div>
  );
}

export default Content;
