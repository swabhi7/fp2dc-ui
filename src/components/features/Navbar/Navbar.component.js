import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [q, setQ] = useState("");
  return (
    <div className="h-20 w-full bg-lime-600 px-20 flex justify-between items-center text-white">
      <div className="flex gap-16">
        <div className="font-bold text-3xl align-center">&lt; FP2DC / &gt;</div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="text-black px-3 rounded h-full"
          />
          <FaSearch className="inline-block text-slate-500 ml-[-10%]" />
        </div>
      </div>
      <div>
        <ul className="flex gap-16 font-bold">
          <li>Recipes</li>
          <li>About</li>
          <li>Contact</li>
          <li>Chef Says</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
