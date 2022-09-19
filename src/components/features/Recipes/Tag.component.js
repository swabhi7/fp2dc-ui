import React from "react";

const Tag = ({ value }) => {
  return (
    <span className="bg-lime-600 text-xs font-bold text-white mr-4 p-1 tracking-wide rounded cursor-pointer">
      #{value}
    </span>
  );
};

export default Tag;
