import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.css";

const Search = ({ forseExpand = false, searchExpandHandler }) => {
  return (
    <div
      // If forseExpand is true then it means this will be inside modal, so change the styling accordingly
      className={`${
        forseExpand === false
          ? classes["search"]
          : classes["search__forse-expand"]
      }`}
    >
      <input
        type="text"
        placeholder="Search"
        className={`${
          forseExpand === false
            ? classes["search-box"]
            : classes["search-box__forse-expand"]
        }`}
      />
      <FaSearch
        onClick={searchExpandHandler}
        className={`${
          forseExpand === false
            ? classes["search-icon"]
            : classes["search-icon__forse-expand"]
        }`}
      />
    </div>
  );
};

export default Search;
