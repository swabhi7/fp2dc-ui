import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onDismiss }) => {
  return createPortal(
    <>
      {/* Faded out background */}
      <div
        className="fixed top-0 h-screen w-screen bg-gray-600 opacity-75"
        onClick={onDismiss}
      ></div>
      {/* Modal content */}
      <div className="fixed top-24 w-[80%] mx-auto inset-x-0 bg-white p-2 flex justify-center items-center rounded">
        {children}
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default Modal;
