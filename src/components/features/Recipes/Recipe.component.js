import React from "react";
import Card from "../../utilities/Card.component";

const Recipe = ({
  imageUrl,
  title,
  description,
  cookingTime,
  difficulty,
  serves,
}) => {
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
        <div className="mb-4">tags</div>
        <p className="mb-4">{description}</p>
        <ul className="mb-6 flex flex-col gap-2 font-semibold">
          {/* TODO - Add icons below */}
          <li>- {cookingTime} minutes</li>
          <li>- {difficulty}</li>
          <li>- {serves}</li>
        </ul>
      </div>
      <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
        View Recipe
      </button>
    </Card>
  );
};

export default Recipe;
