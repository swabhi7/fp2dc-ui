import React from "react";
import { FaBars } from "react-icons/fa";
import Modal from "../../utilities/Modal.component";
import classes from "./Navbar.module.css";
import Search from "./Search.component";

const Navbar = () => {
  return (
    <div className={classes["navbar"]}>
      <div className={classes["logo"]}>&lt; FP2DC / &gt;</div>
      <div className={classes["menu"]}>
        <Modal>
          <Search forseExpand={true} />
        </Modal>
        <Search />
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
