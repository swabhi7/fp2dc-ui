import React from "react";
import _ from "lodash";
import classes from "./Pagination.module.css";
import PaginationButton from "./PaginationButton.component";

// Figure out the list of page buttons based on current page, total pages and maximum number of page buttons to be displayed
const getPageButtons = ({
  currentPage,
  totalPages,
  maxNumberOfPageButtons,
}) => {
  // Current Page will definitely be one of the buttons, so add that
  let pageButtons = [currentPage];
  // left and right distance from current page
  let offset = 1;
  // Keep filling in buttons until (max number of buttons to be displayed are already filled) or (filled buttons are already equal to toal pages)
  while (
    !(_.size(pageButtons) >= maxNumberOfPageButtons) &&
    !(_.size(pageButtons) >= totalPages)
  ) {
    // On the left side - Add the button if greater than or equal to 1
    if (currentPage - offset >= 1)
      pageButtons = [...pageButtons, currentPage - offset];
    // On the right side - Add the button if less than or equal to totalPages
    if (currentPage + offset <= totalPages)
      pageButtons = [...pageButtons, currentPage + offset];
    offset++;
  }
  pageButtons = _.sortBy(pageButtons);
  return pageButtons;
};

const Pagination = ({ currentPage, totalPages, maxNumberOfPageButtons }) => {
  const pageButtons = getPageButtons({
    currentPage,
    totalPages,
    maxNumberOfPageButtons,
  });

  return (
    <div className={classes["pagination"]}>
      <div className={classes["pagination-buttons"]}>
        {/* Prev Button */}
        <PaginationButton buttonContent="<" prevNext={true} />
        {/* Page Buttons */}
        {_.map(pageButtons, (pageButton) => (
          <PaginationButton
            key={pageButton}
            buttonContent={pageButton}
            current={pageButton === currentPage ? true : false}
          />
        ))}
        {/* Next Button */}
        <PaginationButton buttonContent=">" prevNext={true} />
      </div>
      <div className={classes["pagination-text"]}>Show Page 1 of 21</div>
    </div>
  );
};

export default Pagination;
