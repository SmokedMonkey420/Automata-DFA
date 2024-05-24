import React from "react";

function Regex({ showCfg }) {
  const regex1 = "(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)";
  const regex2 =
    "(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*";

  return (
    <div className="regex-container">
      <h3>Regex being simulated</h3>
      <p>{showCfg ? regex1 : regex2}</p>
    </div>
  );
}

export default Regex;
