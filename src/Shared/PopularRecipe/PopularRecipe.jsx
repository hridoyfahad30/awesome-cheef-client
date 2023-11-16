import React, { useEffect, useState } from 'react';
import PopularRecipeCard from './popularRecipeCard';

const PopularRecipe = () => {
    
    const [popularRecipe, setPopularRecipe] = useState([]);

    

    useEffect(() => {

        fetch('https://awesome-chef-recipe-server.vercel.app/popular-recipe')
        .then(res => res.json())
        .then(data => setPopularRecipe(data))

    }, [])



    return (
        <div>
            <div className='grid md:grid-cols-2 mx-auto'>
                {
                    popularRecipe.length === 0? 
                    <button className="btn loading bg-orange-500 m-8">loading</button>
                    :

                    popularRecipe.slice(0, 6).map(recipe => <PopularRecipeCard key={recipe.id} recipe={recipe}></PopularRecipeCard>)
                }
            </div>
            
            
        </div>
    );
};

export default PopularRecipe;