import React from 'react';

const Highlight = () => {
    return (
        <div className='grid grid-cols-3 gap-12 bg-orange-300 bg-opacity-25 p-6 rounded-lg'>
            <div className='my-auto space-y-4'>
                <h3 className='text-xl'>Highlight</h3>
                <h1 className='text-5xl font-semibold'>The magic of the kitchen</h1>
                <p className='text-lg'>On cold winter night, I like to brighten up our dinner table with a big, colorful mix of root veggies and hearty greens, On beautiful, warm days.</p>
            </div>
            <div>
                <img className='rounded-3xl shadow-2xl' src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/concept-of-tasty-food-salad-with-red-orange-top-2022-04-13-15-32-21-utc.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-between'>
                <img className='rounded-3xl' src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/salad-with-beet-2021-08-27-17-07-53-utc.jpg" alt="" />
                <img className='rounded-3xl' src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/concept-of-healthy-food-with-pumpkin-salad-on-mint-2022-01-19-00-22-15-utc-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Highlight;