import React from 'react'
import { useState, useEffect } from 'react'
import recipeData from "../data.json";


function HomePage() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        setRecipes(recipeData);
    }, []);
  return (
    <div className='flex justify-center '>  
        <div className='flex md:flex-row md:justify-center flex-col'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='m-4'>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} width='200' />
                    <p>{recipe.summary}</p>
                    <button onClick={() => alert(`You clicked on ${recipe.title}`)}>More Details</button>
                </div>
            ))}
        </div>
      </div>
  )
}

export default HomePage
