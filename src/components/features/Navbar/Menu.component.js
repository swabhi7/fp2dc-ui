import React from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
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
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/chefsays">Chef Says</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
