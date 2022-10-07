import React from "react";
import { FaBars } from "react-icons/fa";
import classes from "./Menu.module.css";

const Menu = ({ showSidebarHandler }) => {
  return (
    <>
      <FaBars className={classes["menu-icon"]} onClick={showSidebarHandler} />
      <ul className={classes["menu-list"]}>
        <li>Recipes</li>
        <li>Chef Says</li>
        <li>About</li>
        <li>Contact</li>
        <li>Sign In</li>
      </ul>
    </>
  );
};

export default Menu;
