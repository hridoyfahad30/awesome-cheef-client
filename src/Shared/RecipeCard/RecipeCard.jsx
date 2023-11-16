/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';
import swal from 'sweetalert';


// eslint-disable-next-line react/prop-types
const RecipeCard = ({recipe}) => {

    const [fav, setFav] = useState(false)

    const { recipeName, ingredients,recipeImage, cookingMethod, rating} = recipe;

    const handleFav = () => {
        setFav(true);
        swal("Added To Favourite", "", "success");
    }


    return (
        <LazyLoad  height={660} threshold={0.95} >
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto  hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-orange-400 border-4 border-orange-500">
                        
                        <figure>
                            <img className='h-56 w-96' src={recipeImage} alt="" />
                        </figure>

                        <div className="card-body -mt-6">
                                <h2 className="card-title text-xl md:text-2xl text-orange-600">{recipeName}</h2>
                            
                                <div className='flex justify-between items-center gap-5'>
                                    <p className='flex items-center gap-2'>
                                        <Rating className='' 
                                            readonly
                                            initialRating={rating}
                                            emptySymbol={<FaRegStar  className='text-orange-600 text-xl'/>}
                                            fullSymbol={<FaStar className='text-warning text-xl'/>}
                            
                                        ></Rating> <span>{rating}</span>
                                    </p>
                                    <button disabled={fav} onClick={handleFav} className='flex items-center gap-3 bg-orange-500 rounded-md text-white p-2 hover:bg-orange-600 disabled:bg-gray-400'>Add To Favourite <FaRegHeart className='text-xl hover:scale-125 duration-300' /></button>
                                </div>
                            
                            <h1 className='text-lg underline font-semibold'>Ingredients </h1>
                            <ul className='list-decimal ml-5'>
                                {
                                    ingredients.slice(0,5).map((i, index) => <li key={index} className='capitalize'>{i.name}</li>)
                                }
                            </ul>
                            <p className='text-lg font-semibold underline'>Cooking Methods:</p>
                            <p>{cookingMethod.slice(0, 190)}<strong>...</strong> </p>
                        </div>
                    </div>
        </div>
        </LazyLoad>
        
    );
};

export default RecipeCard;