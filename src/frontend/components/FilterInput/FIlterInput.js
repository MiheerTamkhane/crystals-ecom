import "./FilterInput.css";
function FilterInput({ data }) {
  return (
    <ul>
      {data.map((item, i) => {
        return (
          <li key={i} className="accordion-input">
            <input
              type={item.inputType}
              id={item.typeTitle}
              name={item.inputType}
              className="filter-input"
            />
            <label htmlFor={item.typeTitle}>{item.typeTitle}</label>
          </li>
        );
      })}
    </ul>
  );
}

export { FilterInput };
