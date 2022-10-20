import React from "react";
import { createPortal } from "react-dom";

const Sidebar = ({ children, show, onDismiss }) => {
  return createPortal(
    <>
      {/* Faded out background */}
      <div
        className={`fixed top-0 h-screen w-screen bg-gray-600 opacity-75 transition-all ease-in-out duration-700 ${
          show ? "opacity-75" : "opacity-0 translate-x-[-100%]"
        }`}
        onClick={onDismiss}
      ></div>
      {/* Sidebar content */}
      <div
        className={`fixed top-0 right-0 w-[50%] h-full bg-[color:var(--color-primary)] p-2 flex justify-center items-center transition-all ease-in-out duration-700 ${
          show ? "opacity-100" : "opacity-0 translate-x-[100%]"
        }`}
      >
        {children}
      </div>
    </>,
    document.querySelector("#sidebar")
  );
};

export default Sidebar;
