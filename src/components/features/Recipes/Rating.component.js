import React from "react";
import _ from "lodash";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ reviews }) => {
  if (_.isEmpty(reviews)) return;

  const rating = _.meanBy(reviews, "rating");
  // const numberOfReviews = _.size(reviews);

  const fullStars = _.floor(rating);
  const halfStars = rating - _.floor(rating) === 0 ? 0 : 1;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div>
      {_.map(Array(fullStars), (value, index) => (
        <FaStar key={index} className="inline-block" />
      ))}
      {_.map(Array(halfStars), (value, index) => (
        <FaStarHalfAlt key={index} className="inline-block" />
      ))}
      {_.map(Array(emptyStars), (value, index) => (
        <FaRegStar key={index} className="inline-block" />
      ))}
    </div>
  );
};

export default Rating;
