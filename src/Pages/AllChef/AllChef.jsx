import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../Shared/ChefCard/ChefCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AllChef = () => {

    const {loading} = useContext(AuthContext)

    const allChef = useLoaderData();

    return (
        <div className='container mx-auto md:my-8 mt-2 md:mt-10'>
            <h1 className='text-2xl md:text-5xl font-semibold text-orange-500 underline'>Our Chef&apos;s</h1>
            <div className='grid md:grid-cols-3'>
            
            {
                loading? 
                <button className="btn loading bg-orange-500 m-20">loading</button> 
                
                :

                allChef.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
            </div>
        </div>
    );
};

export default AllChef;