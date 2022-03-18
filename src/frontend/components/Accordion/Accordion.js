import "./Accordion.css";
import React from "react";
import { useState } from "react";
import AccordionInput from "../AccordionInput/AccordionInput";

function Accordion({ data }) {
  const [bool, setBool] = useState(false);
  function clickHandler() {
    setBool(bool ? false : true);
  }

  return (
    <div className="accordion">
      <div className="title" onClick={clickHandler}>
        <h3>{data.title}</h3>
        <span className="material-icons">
          {bool ? "expand_less" : "expand_more"}
        </span>
      </div>
      <div className={bool ? "acc-content show" : "acc-content"}>
        <AccordionInput data={data.types} />
      </div>
    </div>
  );
}

export default Accordion;
