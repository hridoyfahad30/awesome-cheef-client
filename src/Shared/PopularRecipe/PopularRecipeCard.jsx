/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';


const PopularRecipeCard = ({recipe}) => {

    const {recipeName, recipeImage, rating} = recipe;

    return (
        <LazyLoad  height={360} threshold={0.95} >
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-8 mx-auto hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-orange-500">
                <figure><img className='h-52 w-96' src={recipeImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-600 -mt-4">
                    {recipeName}
                    <div className="badge bg-orange-600 border-none">POPULAR</div>
                    </h2>
                    
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-4 -mb-2">

                            <Rating className='' 
                                readonly
                                initialRating={rating}
                                emptySymbol={<FaRegStar  className='text-orange-600 text-xl'/>}
                                fullSymbol={<FaStar className='text-warning text-xl'/>}
                                
                            ></Rating> <span>{rating}</span>


                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        </LazyLoad>
    );
};

export default PopularRecipeCard;