import React from "react";
import _ from "lodash";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import classes from "./Rating.module.css";

// NOTE - What exactly should be input here to make this component more reusable?
const Rating = ({ reviews }) => {
  if (_.isEmpty(reviews)) return;

  const rating = _.meanBy(reviews, "rating");
  const numberOfReviews = _.size(reviews);

  // NOTE - Should below calculation logic be moved to another component or even API side?
  const fullStars = _.floor(rating);
  const halfStars = rating - _.floor(rating) === 0 ? 0 : 1;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={classes["rating"]}>
      <div>
        {_.map(Array(fullStars), (value, index) => (
          // NOTE - Is there any issue with using key as index? Check.
          <FaStar key={index} className="" />
        ))}
        {_.map(Array(halfStars), (value, index) => (
          <FaStarHalfAlt key={index} className="" />
        ))}
        {_.map(Array(emptyStars), (value, index) => (
          <FaRegStar key={index} className="" />
        ))}
      </div>
      <div>
        <span className={classes["rating-text"]}>{rating}</span> (
        {numberOfReviews})
      </div>
    </div>
  );
};

export default Rating;
