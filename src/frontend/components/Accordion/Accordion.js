import "./Accordion.css";
import React, { useState } from "react";
import { FilterInput } from "../index";

function Accordion({ data }) {
  const [expandAcc, setExapandAcc] = useState(false);

  return (
    <div className="accordion">
      <div className="title" onClick={() => setExapandAcc(!expandAcc)}>
        <h3>{data.title}</h3>
        <span className="material-icons">
          {expandAcc ? "expand_less" : "expand_more"}
        </span>
      </div>
      <div className={expandAcc ? "acc-content show" : "acc-content"}>
        <FilterInput data={data.types} />
      </div>
    </div>
  );
}

export { Accordion };
