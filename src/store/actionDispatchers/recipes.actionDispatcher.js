const { default: axios } = require("axios");
const {
  FETCH_RECIPES_REQUESTED,
  FETCH_RECIPES_PASSED,
  FETCH_RECIPES_FAILED,
} = require("../actionTypes/recipes.actionType");

const fetchRecipes = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_RECIPES_REQUESTED });
    // TODO : Use some kind of env variables while making API calls and create configurable axios instance
    const response = await axios.get("http://localhost:3333/api/recipes");
    dispatch({ type: FETCH_RECIPES_PASSED, payload: { recipes: response } });
  } catch (error) {
    dispatch({ type: FETCH_RECIPES_FAILED, payload: { error } });
  }
};

export { fetchRecipes };
