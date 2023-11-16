import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <div className='md:my-20 border-t'>
            <ScrollToTop smooth color="white" style={{padding: '5px', marginBottom: '30px', backgroundColor: 'rgb(249 115 22)',  }} />
            <div className='container mx-auto my-5 md:my-10 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0'>
                <div className=''>
                    <Link className='flex items-center md:w-80' to='/'><img className='w-16 h-16' src={Logo} alt="" /><span className='text-3xl font-bold text-orange-600'>AWESOME CHEF</span></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl font-medium mb-4'>Categories</h2>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to=''><FaExternalLinkAlt /> Breakfast Recipes</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to=''><FaExternalLinkAlt /> Lunch Recipes</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to=''><FaExternalLinkAlt /> Dinner Recipes</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to=''><FaExternalLinkAlt /> Drink Recipes</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to=''><FaExternalLinkAlt /> Appetizer & Snack</Link>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl font-medium mb-4'>Learn More</h2>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to='/all-chef'>
                        <FaExternalLinkAlt /> All Chef&apos;s</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to='/all-recipes'>
                        <FaExternalLinkAlt /> All Recipes</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to='/blogs'>
                        <FaExternalLinkAlt /> Blog</Link>
                    <Link className='flex items-center gap-2 ml-4 hover:text-orange-500 duration-300' to='/about'>
                        <FaExternalLinkAlt /> About Us</Link>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl font-medium mb-4'>Get in connect</h2>
                    <p>Follow Us On</p>
                    <div className='flex items-center my-2'>
                        <Link className='text-4xl ml-4 hover:text-blue-600 hover:scale-150 duration-300' target='_blank' to='https://www.facebook.com/ILOVEYOUFAHAD'>
                            <FaFacebook /></Link>
                        <Link className='text-4xl ml-4 hover:text-pink-700 hover:scale-150 duration-300' target='_blank' to='https://www.instagram.com/fahad_ibne/'>
                            <FaInstagram /></Link>
                        <Link className='text-4xl ml-4 hover:text-sky-400 hover:scale-150 duration-300' target='_blank' to='https://twitter.com/hridoy_fahad30'>
                            <FaTwitter /></Link>
                        <Link className='text-4xl ml-4 hover:text-red-600 hover:scale-150 duration-300' target='_blank' to='https://www.youtube.com/channel/UCvF5Qs8svG2ZXnKNU3XbGYA'>
                        <FaYoutube /></Link>
                    </div>
                </div>
            </div>
            <hr className='border border-orange-500' />
            <p className='my-4 text-center text-gray-400'>Copyright © 2023 Awesome Recipe, All rights reserved. <br /> Powered by Fahad Creative.</p>
        </div>
    );
};

export default Footer;