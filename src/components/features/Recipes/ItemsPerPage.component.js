import React from "react";

const ItemsPerPage = () => {
  return (
    <select className="text-xs font-bold border rounded p-2">
      <option>Items Per Page</option>
      <option>12</option>
      <option>24</option>
      <option>36</option>
    </select>
  );
};

export default ItemsPerPage;
