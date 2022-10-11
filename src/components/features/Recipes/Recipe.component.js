import _ from "lodash";
import React, { useState } from "react";
import { FaClock, FaTachometerAlt, FaUtensils } from "react-icons/fa";
import Card from "../../utilities/Card.component";
import Tags from "./Tags.component";
import classes from "./Recipe.module.css";
import Rating from "./Rating.component";

const Recipe = ({
  imageUrl,
  title,
  description,
  cookingTime,
  difficulty,
  serves,
  tags,
  reviews,
}) => {
  const maximumAllowedLengthForDescription = 120;
  const isMoreLessButtonRequired =
    _.size(description) > maximumAllowedLengthForDescription;
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Card>
      <img src={imageUrl} alt={title} className={classes["recipe-image"]} />
      <div className={classes["recipe-body"]}>
        <div className={classes["recipe-body-header"]}>
          <h2>{title}</h2>
          <Rating reviews={reviews} />
        </div>
        <div className={classes["recipe-body-tags"]}>
          <Tags tags={tags} />
        </div>
        <p className={classes["recipe-body-description"]}>
          {showFullDescription
            ? description
            : _.truncate(description, {
                length: maximumAllowedLengthForDescription,
              })}
          {isMoreLessButtonRequired && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? <span>x</span> : <span>...</span>}
            </button>
          )}
        </p>
        <ul className={classes["recipe-body-icons"]}>
          <li>
            <FaClock className={classes.icon} title="Cooking Time" />
            <span>{cookingTime} minutes</span>
          </li>
          <li>
            <FaTachometerAlt className={classes.icon} title="Difficulty" />
            <span>{difficulty}</span>
          </li>
          <li>
            <FaUtensils className={classes.icon} title="Serves" />
            <span>{serves}</span>
          </li>
        </ul>
      </div>
      <button className={classes["recipe-view-button"]}>View Recipe</button>
    </Card>
  );
};

export default Recipe;
