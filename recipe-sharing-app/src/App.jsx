import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import EditRecipeForm from './components/EditRecipeForm';

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <Router>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </Router>
    <FavoritesList />
    <RecommendationsList />
    </>
  )
}

export default App
