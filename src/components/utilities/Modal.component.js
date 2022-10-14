import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, show, onDismiss }) => {
  return createPortal(
    <>
      {/* Faded out background */}
      <div
        className={`fixed top-0 h-screen w-screen bg-gray-600 opacity-75 transition-all ease-in-out duration-700 ${
          show ? "opacity-75" : "opacity-0 translate-y-[100%]"
        }`}
        onClick={onDismiss}
      ></div>
      {/* Modal content */}
      <div
        className={`fixed top-24 w-[80%] mx-auto inset-x-0 bg-white p-2 flex justify-center items-center rounded transition-all ease-in-out duration-700 ${
          show ? "opacity-100" : "opacity-0 translate-y-[-100%]"
        }`}
      >
        {children}
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default Modal;
