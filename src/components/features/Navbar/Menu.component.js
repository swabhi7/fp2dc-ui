import React from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import classes from "./Menu.module.css";

const Menu = ({ showSidebarHandler, insideSidebar, sidebarCloseHandler }) => {
  return (
    <>
      <FaBars
        className={
          classes[insideSidebar ? "menu-icon__inside-sidebar" : "menu-icon"]
        }
        onClick={showSidebarHandler}
      />
      <ul
        className={
          classes[insideSidebar ? "menu-list__inside-sidebar" : "menu-list"]
        }
      >
        {insideSidebar && (
          <li>
            <FaWindowClose onClick={sidebarCloseHandler} />
          </li>
        )}
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
