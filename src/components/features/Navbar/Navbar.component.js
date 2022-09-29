import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div>&lt;FP2DC /&gt;</div>
      <div>
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
      <div>
        <ul>
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
