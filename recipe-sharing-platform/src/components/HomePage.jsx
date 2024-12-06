import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import recipeData from "../data.json";



function HomePage() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        setRecipes(recipeData);
    }, []);
  return (

    <div className='flex justify-center '>  
        <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='m-4 shadow-xl hover:shadow-2xl transition-shadow rounded'>
                     <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h2>{recipe.title}</h2>
                        <p>{recipe.summary}</p>
                    </Link>
                </div>
            ))}
        </div>
      </div>
  )
}

export default HomePage
