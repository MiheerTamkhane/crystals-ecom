import "./Accordion.css";
import React, { useState } from "react";

function Accordion({ children, title }) {
  const [expandAcc, setExapandAcc] = useState(false);

  return (
    <div className="accordion">
      <div
        className="accordion-title"
        onClick={() => setExapandAcc(!expandAcc)}
      >
        <h3>{title}</h3>
        <span className="material-icons">
          {expandAcc ? "expand_less" : "expand_more"}
        </span>
      </div>
      <div className={expandAcc ? "acc-content show" : "acc-content"}>
        {children}
      </div>
    </div>
  );
}

export { Accordion };
