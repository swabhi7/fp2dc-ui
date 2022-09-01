import React from "react";
import Card from "../../utilities/Card.component";
import Container from "../../utilities/Container.component";

const Recipes = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
        {/* TODO - Separate recipe component for individual Cards */}
        <Card>
          <img
            src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
            alt="food"
            className="max-w-full mb-6"
          />
          <div className="px-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Crispy Aloo Burger</h2>
              {/* TODO - Separate Rating component */}
              <div>Rating</div>
            </div>
            {/* TODO - Separate tags and tag component */}
            <div className="mb-3">tags</div>
            <p className="mb-3">
              Dolor pariatur ea sunt id duis aliquip excepteur ea cillum velit.
              Incididunt magna adipisicing magna voluptate consectetur pariatur
              amet nisi do aliqua sit et proident.
            </p>
            <ul className="mb-4 flex flex-col gap-2 font-semibold">
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

        <Card>
          <img
            src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
            alt="food"
            className="max-w-full mb-4"
          />
          <div className="px-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold">Crispy Aloo Burger</h2>
              <div>Rating</div>
            </div>
            <div className="mb-3">tags</div>
            <p className="mb-3">
              Dolor pariatur ea sunt id duis aliquip excepteur ea cillum velit.
              Incididunt magna adipisicing magna voluptate consectetur pariatur
              amet nisi do aliqua sit et proident.
            </p>
            <ul className="mb-4 flex flex-col gap-2 font-semibold">
              <li>- American</li>
              <li>- 30 minutes</li>
              <li>- Easy</li>
            </ul>
          </div>
          <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
            View Recipe
          </button>
        </Card>

        <Card>
          <img
            src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
            alt="food"
            className="max-w-full mb-4"
          />
          <div className="px-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold">Crispy Aloo Burger</h2>
              <div>Rating</div>
            </div>
            <div className="mb-3">tags</div>
            <p className="mb-3">
              Dolor pariatur ea sunt id duis aliquip excepteur ea cillum velit.
              Incididunt magna adipisicing magna voluptate consectetur pariatur
              amet nisi do aliqua sit et proident.
            </p>
            <ul className="mb-4 flex flex-col gap-2 font-semibold">
              <li>- American</li>
              <li>- 30 minutes</li>
              <li>- Easy</li>
            </ul>
          </div>
          <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
            View Recipe
          </button>
        </Card>

        <Card>
          <img
            src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
            alt="food"
            className="max-w-full mb-4"
          />
          <div className="px-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold">Crispy Aloo Burger</h2>
              <div>Rating</div>
            </div>
            <div className="mb-3">tags</div>
            <p className="mb-3">
              Dolor pariatur ea sunt id duis aliquip excepteur ea cillum velit.
              Incididunt magna adipisicing magna voluptate consectetur pariatur
              amet nisi do aliqua sit et proident.
            </p>
            <ul className="mb-4 flex flex-col gap-2 font-semibold">
              <li>- American</li>
              <li>- 30 minutes</li>
              <li>- Easy</li>
            </ul>
          </div>
          <button className="w-full bg-lime-600 py-4 text-white font-bold tracking-wider">
            View Recipe
          </button>
        </Card>
      </div>
    </Container>
  );
};

export default Recipes;
