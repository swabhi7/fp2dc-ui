import _ from "lodash";
import React, { useState } from "react";
import { FaClock, FaTachometerAlt, FaUtensils } from 'react-icons/fa';
import Card from "../../utilities/Card.component";
import Tags from "./Tags.component";

const Recipe = ({
  imageUrl,
  title,
  description,
  cookingTime,
  difficulty,
  serves,
  tags
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
        <p className="mb-4 leading-relaxed">
          {showFullDescription
            ? description
            : _.truncate(description, {
                length: maximumAllowedLengthForDescription,
              })}
          {isMoreLessButtonRequired && (
            <button
              className="bg-lime-600 text-white text-xs font-bold px-2 rounded"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? <span>&larr;</span> : <span>&rarr;</span>}
            </button>
          )}
        </p>
        <ul className="mb-6 flex flex-col gap-2 font-semibold">
          {/* TODO - Add icons below */}
          <li><FaClock className="inline-block" /> {cookingTime} minutes</li>
          <li><FaTachometerAlt className="inline-block" /> {difficulty}</li>
          <li><FaUtensils className="inline-block" /> {serves}</li>
        </ul>
      </div>
      <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
        View Recipe
      </button>
    </Card>
  );
};

export default Recipe;
