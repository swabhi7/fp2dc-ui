import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../../store/actionDispatchers/recipes.actionDispatcher";
import Container from "../../utilities/Container.component";
import Recipe from "./Recipe.component";

const Recipes = () => {
  const { recipes } = useSelector((store) => store.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchRecipes());
    })();
  }, [dispatch]);

  return (
    <Container>
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
        {recipes.map(
          ({
            _id,
            imageUrl,
            title,
            description,
            cookingTime,
            difficulty,
            serves,
          }) => (
            <Recipe
              key={_id}
              imageUrl={imageUrl}
              title={title}
              description={description}
              cookingTime={cookingTime}
              difficulty={difficulty}
              serves={serves}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default Recipes;
