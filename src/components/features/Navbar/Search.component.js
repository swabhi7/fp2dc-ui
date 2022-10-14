import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.css";
import _ from "lodash";

const Search = ({ forseExpand = false, searchExpandHandler }) => {
  const searchBoxRef = useRef();
  const [isSearchBoxExpanded, setIsSearchBoxExpanded] = useState(
    _.get(searchBoxRef, ["current", "offsetWidth"], 0) !== 0
  );

  useEffect(() => {
    setIsSearchBoxExpanded(
      _.get(searchBoxRef, ["current", "offsetWidth"], 0) !== 0
    );
  }, [searchBoxRef]);

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
        ref={searchBoxRef}
        type="text"
        placeholder="Search"
        className={`${
          forseExpand === false
            ? `${classes["search-box"]} ${classes["peer"]}`
            : classes["search-box__forse-expand"]
        }`}
      />
      <FaSearch
        onClick={isSearchBoxExpanded ? null : searchExpandHandler}
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
