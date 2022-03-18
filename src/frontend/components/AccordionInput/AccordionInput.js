import "./AccordionInput.css";
export default function AccordionInputComp({ data }) {
  return (
    <ul>
      {data.map((item, i) => {
        return (
          <li key={i} className="accordion-input">
            <input
              type={item.inputType}
              id={item.typeTitle}
              name={item.inputType}
            />
            <label htmlFor={item.typeTitle}>{item.typeTitle}</label>
          </li>
        );
      })}
    </ul>
  );
}
