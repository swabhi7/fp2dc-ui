const {
  FETCH_RECIPES_REQUESTED,
  FETCH_RECIPES_PASSED,
  FETCH_RECIPES_FAILED,
} = require("../actionTypes/recipes.actionType");

const recipesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUESTED:
      return { ...state, loading: true, error: null };
    case FETCH_RECIPES_PASSED:
      return {
        ...state,
        loading: false,
        error: null,
        recipes: action.payload.recipes,
      };
    case FETCH_RECIPES_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return { ...state };
  }
};

export { recipesReducer };
