  // RecipeList component
  import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {filteredRecipes.map((recipe, index) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;