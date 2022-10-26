import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../store/actionDispatchers/recipes.actionDispatcher";
import Recipes from "../features/Recipes/Recipes.component";

const RecipesPage = () => {
  const { recipes } = useSelector((store) => store.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchRecipes());
    })();
  }, [dispatch]);
  
  return <Recipes recipes={recipes} />;
};

export default RecipesPage;
