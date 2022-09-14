import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./reducers/recipes.reducer";

const reducer = {
  recipes: recipesReducer,
};

const preloadedState = {
  recipes: {
    recipes: [],
    loading: false,
    error: null,
  },
};

// NOTE - configureStore comes by default with redux thunk. So no need to add it explicitly.
const store = configureStore({ reducer, preloadedState });

export default store;
