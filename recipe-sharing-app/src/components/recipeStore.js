import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // Personalized recommendations
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations (mock logic here)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
    recipes: [], // Full list of recipes
    searchTerm: '', // Search term input by user
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [], // Filtered recipes
    filterRecipes: () =>
      set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
