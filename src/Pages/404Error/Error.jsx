import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const {error, status} = useRouteError();

    return (
        <div className='flex justify-center items-center h-screen'>
            <img src="https://i.ibb.co/LtRVsJ8/error404.jpg" alt="" />

            <div className='absolute text-white text-center'>
                <h1 className='text-8xl my-6 font-bold text-white'>{status}</h1>
                <h1 className='text-6xl my-6 font-bold text-white'>{error.message}</h1>
                <p className='text-lg my-6 mb-20'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to='/' className='px-12 py-6 rounded-lg bg-orange-600 text-white font-medium text-2xl hover:bg-orange-500 duration-300' >Back To Home</Link>
            </div>
        </div>
    );
};

export default Error;