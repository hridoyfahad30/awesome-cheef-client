import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../Shared/RecipeCard/RecipeCard';

const AllRecipes = () => {

    const allRecipes = useLoaderData();

    return (
        
        <div className='container mx-auto md:my-8 mt-3 md:mt-10'>
            <h1 className='text-2xl md:text-5xl font-semibold text-orange-500 underline'>All Chef&apos;s Recipe</h1>
            
            <div className='container mx-auto grid md:grid-cols-3 my-4 md:my-10'>
                {
                    allRecipes.length === 0?
                    
                    <button className="btn loading bg-orange-500 m-8">loading</button>
                    
                    :

                    allRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
                }
            </div>
            
        </div>
    );
};

export default AllRecipes;