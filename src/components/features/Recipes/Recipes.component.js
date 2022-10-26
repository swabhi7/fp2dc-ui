import _ from "lodash";
import React from "react";
import Container from "../../utilities/Container.component";
import Recipe from "./Recipe.component";
import classes from "./Recipes.module.css";

const Recipes = ({ recipes = [] }) => {
  return (
    <Container>
      <div className={classes["recipes"]}>
        {_.map(
          recipes,
          ({
            _id,
            imageUrl,
            title,
            description,
            cookingTime,
            difficulty,
            serves,
            tags,
            reviews,
          }) => (
            <Recipe
              key={_id}
              imageUrl={imageUrl}
              title={title}
              description={description}
              cookingTime={cookingTime}
              difficulty={difficulty}
              serves={serves}
              tags={tags}
              reviews={reviews}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default Recipes;
