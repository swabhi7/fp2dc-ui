import React from "react";
import Card from "../../utilities/Card.component";

const Recipe = () => {
  return (
    <Card>
      <img
        src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
        alt="food"
        className="max-w-full mb-8"
      />
      <div className="px-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Crispy Aloo Burger</h2>
          {/* TODO - Separate Rating component */}
          <div>Rating</div>
        </div>
        {/* TODO - Separate tags and tag component */}
        <div className="mb-4">tags</div>
        <p className="mb-4">
          Dolor pariatur ea sunt id duis aliquip excepteur ea cillum velit.
          Incididunt magna adipisicing magna voluptate consectetur pariatur amet
          nisi do aliqua sit et proident.
        </p>
        <ul className="mb-6 flex flex-col gap-2 font-semibold">
          {/* TODO - Add icons below */}
          <li>- American</li>
          <li>- 30 minutes</li>
          <li>- Easy</li>
        </ul>
      </div>
      <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
        View Recipe
      </button>
    </Card>
  );
};

export default Recipe;
