import React ,{useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import recipeData from '../data.json'

function RecipeDetail() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
        const recipe = recipeData.find(recipe => recipe.id === parseInt(id));
        setRecipe(recipe);
    }, [id]);
    if (!recipe) return <h1>Laoding recipe details.....</h1>
  return (
    <div className='bg-indigo-400 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     <section className='bg-blue-300 m-4 p-4 shadow-xl hover:shadow-2xl'>
        <h1 className='text-2xl font-bold'>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} />
        <p><strong>Summary:</strong> {recipe.summary}</p>
     </section>
    <section className='bg-green-300 m-4 p-4 shadow-xl hover:shadow-2xl'>
         <p><strong className='text-2xl font-bold'>Ingredients:</strong></p>
            <ul>
                {/* Assuming the JSON has a field 'ingredients' that is an array */}
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
    </section>
      <section className='bg-red-300 m-4 p-4 shadow-xl hover:shadow-2xl'>
      {recipe.instructions && (
        <>
          <p><strong  className='text-2xl font-bold'>Instructions:</strong></p>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
      {!recipe.instructions && <p>Instructions not available for this recipe.</p>}
      </section>
      
    </div>
  )
}

export default RecipeDetail
