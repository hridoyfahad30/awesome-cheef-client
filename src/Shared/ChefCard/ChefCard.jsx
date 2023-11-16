/* eslint-disable react/prop-types */
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {

    const {id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience} = chef;

    return (
        <LazyLoad  height={600} threshold={0.95} >
            <div className='rounded-2xl hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-orange-500 mt-10 mb-10 md:mb-20 w-96 mx-auto'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img style={{height: '250px'}} className='w-96' src={chefPicture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-orange-600">
                            {chefName}
                            </h2>
                        
                            <div className="card-actions justify-center items-center my-6">
                                <div className="badge badge-outline border-2 border-orange-600 font-semibold p-4">{yearsOfExperience} Year&apos;s of Experience</div>
                                
                            </div>
                            <div className="card-actions justify-between items-center">
                            <div className="badge badge-outline border-2 border-orange-600 font-semibold p-4">{numberOfRecipes} recipe&apos;s</div>
                                <div className="badge badge-outline border-2 border-orange-600 font-semibold p-4">{likes} Like&apos;s</div>
                            </div>
                            <Link to={`/chef/${id}`} className='mt-6 px-8 py-2 rounded-lg bg-orange-600 text-white font-medium text-center text-lg hover:bg-orange-500 duration-300' >View All Recipes </Link>
                            
                        </div>
                    </div>
        </div>
        </LazyLoad>
    
    );
};

export default ChefCard;