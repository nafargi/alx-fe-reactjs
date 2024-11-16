import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipe ID from the route
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(recipeId)) // Find the matching recipe
  );

  // Handle case where recipe is not found
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>Recipe Details</h1>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p><strong>Title:</strong> {recipe.title}</p>
      <p><strong>Description:</strong> {recipe.description}</p>
      {/* Add components for editing or deleting recipes here if needed */}
    </div>
  );
};

export default RecipeDetails;
