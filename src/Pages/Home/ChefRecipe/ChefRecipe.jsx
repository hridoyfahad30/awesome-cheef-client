/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../../Shared/RecipeCard/RecipeCard';

const ChefRecipe = () => {

    const chef = useLoaderData();
    
    const [allRecipe, setAllRecipe] = useState([]);

    const {id, bio, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience} = chef;

    useEffect(()=> {

        fetch(`https://awesome-chef-recipe-server.vercel.app/chef-recipe/${id}`)
        .then(res => res.json())
        .then(data => setAllRecipe(data))

    }, []);
    
    

    return (
        <div className='container mx-auto my-6 md:my-10'>
            <div className="bg-[url('https://i.ibb.co/K0jHj0t/bg.jpg')] bg-cover rounded-2xl md:p-6 grid md:grid-cols-2 gap-10 mb-6 md:mb-20">
                <div className=''>
                    <img className='rounded-lg hover:scale-105 duration-500 w-96 mx-auto' src={chefPicture} alt="" />
                </div>
                <div className=''>
                    <h1 className='text-3xl px-3 md:text-6xl font-bold text-white md:my-4'>{chefName}</h1>
                    <h5 className='break-words px-3 md:text-xl text-justify text-white'>{bio}</h5>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-2 my-10'>
                        <h6 className='text-lg md:text-2xl border-2 bg-white border-orange-600 rounded-3xl p-4 font-semibold hover:scale-105 duration-300 hover:bg-orange-500'>{yearsOfExperience} Year&apos;s of experience</h6>
                        <h6 className='text-lg md:text-2xl border-2 bg-white border-orange-600 rounded-3xl p-4 font-semibold hover:scale-105 duration-300 hover:bg-orange-500'>{numberOfRecipes} Recipe&apos;s</h6>
                        <h6 className='text-lg md:text-2xl border-2 bg-white border-orange-600 rounded-3xl p-4 font-semibold hover:scale-105 duration-300 hover:bg-orange-500'>{likes} Like&apos;s</h6>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-xl md:text-3xl text-orange-600'>All Recipe&apos;s By This Chef</h1>
                <hr className='border-2 border-orange-700 md:mt-2 md:mb-12' />
                <div className='grid md:grid-cols-3'>
                    {
                        allRecipe.length === 0? 
                        <button className="btn loading bg-orange-500 m-8">loading</button> 
                
                            :

                        allRecipe.map(r => <RecipeCard key={r.id} recipe={r}></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;