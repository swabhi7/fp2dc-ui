import React from "react";
import { createPortal } from "react-dom";

const Sidebar = ({ children, onDismiss }) => {
  return createPortal(
    <>
      {/* Faded out background */}
      <div
        className="fixed top-0 h-screen w-screen bg-gray-600 opacity-75"
        onClick={onDismiss}
      ></div>
      {/* Sidebar content */}
      <div className="fixed top-0 right-0 w-[50%] h-full bg-lime-600 p-2 flex justify-center items-center">
        {children}
      </div>
    </>,
    document.querySelector("#sidebar")
  );
};

export default Sidebar;
