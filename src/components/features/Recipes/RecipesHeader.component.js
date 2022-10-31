import React from "react";
import ItemsPerPage from "./ItemsPerPage.component";
import Pagination from "./Pagination.component";
import Sorting from "./Sorting.component";

const RecipesHeader = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center gap-4 mb-4">
        <Sorting />
        <ItemsPerPage />
      </div>
      <Pagination currentPage={7} totalPages={18} maxNumberOfPageButtons={5} />
    </div>
  );
};

export default RecipesHeader;
