import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
