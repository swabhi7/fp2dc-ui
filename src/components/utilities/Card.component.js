import React from "react";

const Card = ({ children, classes }) => {
  return (
    <div className={`shadow-2xl rounded-lg overflow-hidden ${classes}`}>{children}</div>
  );
};

export default Card;
