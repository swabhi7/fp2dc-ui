import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-lime-600 px-20 flex justify-between items-center text-white">
      <div className="font-bold text-3xl align-center">&lt; FP2DC / &gt;</div>
      <div>
        <ul className="flex gap-16 font-bold">
          <li>Recipes</li>
          <li>About</li>
          <li>Contact</li>
          <li>Chef Says</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
