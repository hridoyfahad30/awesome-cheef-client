import React from 'react';

const GetUpdateRecipe = () => {
    return (
        <div className='p-4 md:py-28'>
            <div className='bg-white bg-opacity-10 backdrop-brightness-50 backdrop-blur-md md:w-8/12 rounded-2xl px-4 py-1 md:px-8 md:py-4 shadow-2xl shadow-orange-950'>
                <h1 className='text-3xl md:text-5xl font-semibold my-8'>Get update delicious <br /> recipes everyday!</h1>
                <p className='text-base text-justify mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quia totam ducimus, mollitia voluptate natus perferendis vero dolorem laborum magnam cumque dolorum sint nulla reiciendis rerum obcaecati rem officiis dicta, cum dolore! Rerum, exercitationem dolores a blanditiis officia consequatur nihil maxime distinctio, illo quis aspernatur fugiat tempora odit nulla rem?</p>

                <div className=''>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-white text-lg">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white text-lg">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className="label">
                            <span className="label-text text-white text-lg">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <button className='px-8 py-3 my-6 w-full rounded-lg bg-orange-600 text-white font-medium text-lg hover:bg-orange-500 duration-300'>Get Update</button>
                    
                </div>
            </div>
        </div>
    );
};

export default GetUpdateRecipe;