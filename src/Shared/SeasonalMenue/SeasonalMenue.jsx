import React from 'react';

const SeasonalMenue = () => {
    return (
        <div className='flex items-center gap-6 bg-orange-300 bg-opacity-25 rounded-3xl overflow-hidden md:w-[600px] lg:w-[1200px] mx-auto'>
            <div>
                <img className='h-[300px] md:h-[700px] ' src="https://grandrestaurantv6-7.themegoods.com/clean/wp-content/uploads/sites/2/2022/09/fresh-salad-with-cantaloupe-melon-prosciutto-sof-2022-04-19-22-08-50-utc-1.jpg" alt="" />
            </div>
            <div className='p-4 md:p-8 w-1/2 space-y-4'>
                <h1 className='text-2xl md:text-3xl lg:text-6xl'>A new way to experience food</h1>
                <p className='text-lg md:text-2xl'>Enjoy our seasonal menu and experience the beauty of naturalness</p>
            </div>
        </div>
    );
};

export default SeasonalMenue;