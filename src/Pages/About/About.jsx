import React from 'react';
import GetUpdateRecipe from '../../Shared/GetUpdateRecipe/GetUpdateRecipe';

const About = () => {
    return (
        <div className='bg-orange-50'>
            <div className="bg-[url('https://i.ibb.co/6g4qMKv/Gro1.jpg')] bg-cover py-10 md:mb-10">
                <div className="container mx-auto flex justify-center items-center">
                    <h1 className='p-4 md:p-12 border-4 rounded-xl text-white text-3xl md:text-8xl font-bold text-center md:w-5/12 bg-slate-900 bg-opacity-70'>About Us</h1>
                </div>            
             </div>
             <div className='container mx-auto grid  md:grid-cols-2 items-center gap-8 py-20 '>
                <div className='border-l-8 border-orange-500 p-6 rounded-2xl shadow-2xl'>
                    <h1 className='text-xl text-orange-500 font-semibold my-6'>WHO WE ARE</h1>
                    <h1 className='text-4xl md:text-6xl text-orange-500 font-semibold my-6'> More Then thousand flavors in one Kitchen</h1>
                    <p className='text-justify w-10/12 my-6'>Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.
                    <br />    
                    Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.</p>
                </div>
                <div className=''>
                    <img className='rounded-2xl' src="https://i.ibb.co/1JPNZSX/about2.jpg" alt="" />
                </div>
             </div>
             <div className="bg-[url('https://i.ibb.co/d7LxZGs/about3.jpg')] bg-cover p-8 md:py-10 mb-10">
                <div className="container md:ml-48 md:my-28 bg-white backdrop-brightness-75 p-6 md:p-12 rounded-2xl bg-opacity-40 text-black backdrop-blur-md shadow-2xl shadow-slate-900 md:w-6/12">
                    <h5 className='my-6 text-lg md:text-2xl text-orange-800 border-l-4 rounded-md border-orange-900 pl-2 font-semibold'>MESSAGE FROM FOUNDER</h5>
                    <h2 className='my-6 text-2xl md:text-5xl leading-tight font-semibold'>First, we eat. Then, we <br /> do everything else.</h2>
                    <p className='my-6 md:w-9/12 text-base text-justify md:text-xl'>Consectetur quisque per vel ac aptent praesent convallis aliquam montes. Lectus sit inceptos dis dui mattis ad morbi leo luctus duis. Mauris neque dictumst letius consequat senectus potenti ad.</p>
                    <p className='my-6 md:w-9/12 text-base text-justify md:text-xl'>Consectetur quisque per vel ac aptent praesent convallis aliquam montes. Lectus sit inceptos dis dui mattis ad morbi leo luctus duis. Mauris neque dictumst letius consequat senectus potenti ad.</p>
                    <img className='w-96 p-4' src="https://i.ibb.co/pdJxLwx/ataturk-signature-removebg-preview.png" alt="" />
                </div>            
             </div>
             <div className="my-20 bg-[url('https://i.ibb.co/02dCjJX/Grou1.jpg')] rounded-lg bg-cover">
            <div className='container mx-auto text-white md:w-6/12'>
                <GetUpdateRecipe></GetUpdateRecipe>
            </div>
        </div>

        </div>
    );
};

export default About;