import React from "react";
import ItemsPerPage from "./ItemsPerPage.component";
import Pagination from "./Pagination.component";
import Sorting from "./Sorting.component";

const RecipesHeader = () => {
  return (
    <div className="mt-10 flex justify-between">
      <Sorting />
      <Pagination currentPage={7} totalPages={18} maxNumberOfPageButtons={5} />
      <ItemsPerPage />
    </div>
  );
};

export default RecipesHeader;