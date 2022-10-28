import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../store/actionDispatchers/recipes.actionDispatcher";
import Recipes from "../features/Recipes/Recipes.component";
import RecipesHeader from "../features/Recipes/RecipesHeader.component";
import Container from "../utilities/Container.component";

const RecipesPage = () => {
  const { recipes } = useSelector((store) => store.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchRecipes());
    })();
  }, [dispatch]);

  return (
    <Container>
      <RecipesHeader />
      <Recipes recipes={recipes} />
    </Container>
  );
};

export default RecipesPage;