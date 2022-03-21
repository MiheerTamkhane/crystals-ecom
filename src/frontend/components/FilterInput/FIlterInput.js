import { useFilter } from "../../contexts/FilterContext";
import "./FilterInput.css";
function FilterInput({ data }) {
  // const { dispatch } = useFilter();

  return (
    <div className="accordion-input">
      <label htmlFor="necklace">
        <input
          type="checkbox"
          id="necklace"
          name="category"
          className="filter-input"
        />
        necklace
      </label>
    </div>
  );
}

export { FilterInput };
