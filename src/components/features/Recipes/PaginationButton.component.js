import React from "react";
import classes from "./PaginationButton.module.css";

const PaginationButton = ({
  buttonContent,
  prevNext = false,
  current = false,
}) => {
  return (
    <button
      className={`${classes["pagination-button"]} ${
        prevNext ? classes["prev-next"] : ""
      } ${current ? classes["current"] : ""}`}
    >
      {buttonContent}
    </button>
  );
};

export default PaginationButton;
