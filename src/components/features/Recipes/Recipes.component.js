import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../../store/actionDispatchers/recipes.actionDispatcher";
import Container from "../../utilities/Container.component";
import Recipe from "./Recipe.component";

const Recipes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  });

  return (
    <Container>
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
        {/* TODO - Separate recipe component for individual Cards */}
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </Container>
  );
};

export default Recipes;
