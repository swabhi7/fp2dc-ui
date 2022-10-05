import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Modal from "../../utilities/Modal.component";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["navbar"]}>
      <div className={classes["logo"]}>&lt; FP2DC / &gt;</div>
      <div className={classes["menu"]}>
        <Modal>Modal</Modal>
        <div className={classes["search"]}>
          <input
            type="text"
            placeholder="Search"
            className={classes["search-box"]}
          />
          <FaSearch className={classes["search-icon"]} />
        </div>
        <FaBars className={classes["menu-icon"]} />
        <ul className={classes["menu-list"]}>
          <li>Recipes</li>
          <li>Chef Says</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
