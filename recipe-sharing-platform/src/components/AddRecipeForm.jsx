import React, { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  // State variables for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title) {
      newErrors.title = "Title is required.";
    }
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = ingredients.split(",").map((item) => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = "Ingredients must include at least two items.";
      }
    }
    if (!instructions) {
      newErrors.instructions = "Instructions are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Create a new recipe object
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: instructions.split("\n").map((step) => step.trim()),
      };

      // Call the onAddRecipe function passed as a prop
      onAddRecipe(newRecipe);

      // Reset form fields and error state
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        {errors.title && <p className="text-red-500 mb-2">{errors.title}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter recipe title"
          />
        </div>

        {errors.ingredients && (
          <p className="text-red-500 mb-2">{errors.ingredients}</p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter ingredients, separated by commas"
          />
        </div>

        {errors.instructions && (
          <p className="text-red-500 mb-2">{errors.instructions}</p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter preparation steps"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
