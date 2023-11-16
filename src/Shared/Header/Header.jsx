import React, { useContext, useEffect, useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaAlignJustify, FaChevronCircleUp, FaUserCircle, FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Switch, useDarkreader } from 'react-darkreader';

const Header = () => {

    const {user, logOut, loading} = useContext(AuthContext);
    const [isDark, { toggle }] = useDarkreader(false);
    const [open, setOpen] = useState(false);


    const handleLogout = () => {
        logOut();
    };

    const handleHumburgMenu = () => {
        setOpen(false)
    }

    useEffect(()=>{

        document.addEventListener('click', handleHumburgMenu ) },
        []);


    return (
        <div className='sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm z-50'>
            
            <nav className='container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2 py-2 sticky top-0 z-50 px-2 md:px-0'>
                <div className=''>
                    <Link className='flex md:justify-center items-center' to='/'><img className='w-12 md:w-16' src={Logo} alt="" /><span className='text-xl md:text-3xl font-bold text-orange-600'>AWESOME CHEF</span></Link>
                </div>
                
                <div>
                    <div onClick={e=> 
                            {
                                e.stopPropagation()
                                setOpen(!open);

                            } 
                        }

                    className='md:hidden'>
                        <span>{open == true ? <FaChevronCircleUp className="h-10 w-10 text-orange-500 absolute top-2 right-2" /> 
                        : <FaAlignJustify className="h-10 w-10 text-orange-500 absolute top-2 right-2" />}</span>
                    </div>

                    <div className={`flex flex-col md:flex-row md:justify-around items-start md:items-center gap-3 md:gap-10 text-xl font-medium absolute md:static duration-500 ${open ? 'block p-6 md:p-0 bg-white shadow-2xl shadow-black w-2/4 md:w-0 rounded-xl right-2 top-16 z-50' : '-top-72 right-0'}`}>
                        <button className='rounded-xl hover:shadow-2xl hover:shadow-orange-600 hover:text-orange-600 duration-300'><ActiveLink to='/'>Home</ActiveLink></button>
                        <button className='rounded-xl hover:shadow-2xl hover:shadow-orange-600 hover:text-orange-600 duration-300'><ActiveLink to='/all-chef'>All Chef&apos;s</ActiveLink></button>
                        <button className='rounded-xl hover:shadow-2xl hover:shadow-orange-600 hover:text-orange-600 duration-300'><ActiveLink to='/all-recipes'>All Recipe</ActiveLink></button>
                        <button className='rounded-xl hover:shadow-2xl hover:shadow-orange-600 hover:text-orange-600 duration-300'><ActiveLink to='/blogs'>Blogs</ActiveLink></button>
                        <button className='rounded-xl hover:shadow-2xl hover:shadow-orange-600 hover:text-orange-600 duration-300'><ActiveLink to='/about'>About Us</ActiveLink></button>
                    </div>
                </div>
                
                
                {

                <div className='flex items-center gap-2'>

                    {
                        user? 
                        
                        <div className='flex justify-center items-center gap-6'>

                            {
                                user.photoURL?

                                <Link to='profile' className="tooltip tooltip-left tooltip-primary mt-2"
                                data-tip={user.displayName}>
                                    
                                        <div className="avatar online">
                                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    
                                </Link>

                                :

                            <div className="tooltip tooltip-left tooltip-primary"
                                data-tip={user.displayName}>

                                <FaUserCircle className='text-5xl' />
                            </div>
                            }
                            
                            {
                                loading? 
                                
                                <button className="btn loading"></button> :
                                <Link onClick={handleLogout} className='flex items-center gap-2 px-8 py-2 rounded-lg bg-orange-600 text-white font-medium text-lg hover:bg-orange-500 duration-300' to='/login'>Sign Out </Link>
                            }
                            
                        </div>
                        
                        :

                        <Link className='flex items-center gap-2 px-8 py-2 rounded-lg bg-orange-600 text-white font-medium text-lg hover:bg-orange-500 duration-300' to='/login'>Sign In <FaUserLock /></Link>
                    
                    }
                    <Switch checked={isDark} onChange={toggle} styling="github" />

                </div>}
            </nav>
            
        </div>
    );
};

export default Header;