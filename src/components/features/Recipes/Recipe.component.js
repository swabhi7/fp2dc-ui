import _ from "lodash";
import React, { useState } from "react";
import { FaClock, FaTachometerAlt, FaUtensils } from "react-icons/fa";
import Card from "../../utilities/Card.component";
import Tags from "./Tags.component";
import classes from "./Recipe.module.css";

const Recipe = ({
  imageUrl,
  title,
  description,
  cookingTime,
  difficulty,
  serves,
  tags,
}) => {
  const maximumAllowedLengthForDescription = 120;
  const isMoreLessButtonRequired =
    _.size(description) > maximumAllowedLengthForDescription;
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Card>
      <img src={imageUrl} alt={title} className="max-w-full mb-8" />
      <div className="px-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          {/* TODO - Separate Rating component */}
          <div>Rating</div>
        </div>
        {/* TODO - Separate tags and tag component */}
        <div className="mb-4">
          <Tags tags={tags} />
        </div>
        <p className="mb-6 leading-relaxed">
          {showFullDescription
            ? description
            : _.truncate(description, {
                length: maximumAllowedLengthForDescription,
              })}
          {isMoreLessButtonRequired && (
            <button
              className="bg-lime-600 text-white text-xs font-bold px-1.5 rounded-full"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? <span>x</span> : <span>...</span>}
            </button>
          )}
        </p>
        <ul className="mb-8 flex flex-col gap-2 font-semibold">
          {/* TODO - Refactor the duplicate code below (classnames) */}
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
      <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
        View Recipe
      </button>
    </Card>
  );
};

export default Recipe;
