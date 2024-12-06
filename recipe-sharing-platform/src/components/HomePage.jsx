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
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='m-4 shadow-xl hover:shadow-2xl transition-shadow rounded'>
                    <h2 className="text-2xl font-bold">{recipe.title}</h2>
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
