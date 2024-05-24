import React from "react";
import "./Cfgbox.css";

function Cfgbox({ showCfg }) {
  const cfg1 = {
    S: "ABCDEFDG",
    A: "bab A | null",
    B: "b | a",
    C: "bab | aba",
    D: "aD | bD | null",
    E: "aaE | bbE | null",
    F: "b | a | bb",
    G: "aa | bb",
  };

  const cfg2 = {
    S: "BCDABEFAB",
    A: "1 | 0",
    B: "1B | 0B | null",
    C: "11 | 00",
    D: "11D | 00D | null",
    E: "101 | 111",
    F: "101F | 111F | null",
  };

  return (
    <div className="cfg-container">
      <h3>CFG:</h3>
      {showCfg
        ? Object.entries(cfg1).map(([key, value]) => (
            <div key={key}>
              <strong>{key} → </strong>{" "}
              {value.split("|").map((rule, index, array) => (
                <span key={index}>
                  {rule}
                  {index < array.length - 1 && "|"}
                </span>
              ))}
            </div>
          ))
        : Object.entries(cfg2).map(([key, value]) => (
            <div key={key}>
              <strong>{key} → </strong>{" "}
              {value.split("|").map((rule, index, array) => (
                <span key={index}>
                  {rule}
                  {index < array.length - 1 && "|"}
                </span>
              ))}
            </div>
          ))}
    </div>
  );
}

export default Cfgbox;
