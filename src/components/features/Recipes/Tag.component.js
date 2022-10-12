import React from "react";
import classes from "./Tag.module.css";

const Tag = ({ value }) => {
  return <span className={classes["tag"]}>#{value}</span>;
};

export default Tag;
