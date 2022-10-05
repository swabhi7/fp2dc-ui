import React from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes["search"]}>
      <input
        type="text"
        placeholder="Search"
        className={classes["search-box"]}
      />
      <FaSearch className={classes["search-icon"]} />
    </div>
  );
};

export default Search;
