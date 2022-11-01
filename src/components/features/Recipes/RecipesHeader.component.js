import React from "react";
import Pagination from "./Pagination.component";

const RecipesHeader = () => {
  return (
    <div className="mt-10">
      <Pagination currentPage={7} totalPages={18} maxNumberOfPageButtons={5} />
    </div>
  );
};

export default RecipesHeader;
