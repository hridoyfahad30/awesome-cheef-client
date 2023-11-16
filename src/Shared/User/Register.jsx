import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');
    const [check, setCheck] = useState(false);
    const location = useLocation();
    const from = location?.state?.from?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    
    const { createUser, googleSignUp, githubSignUp} = useContext(AuthContext);


    const handleCreateUser = (e) => {
        e.preventDefault();

        setSuccess('');
        setErr('');

        if(password.length < 6){
            e.target.password.focus();
            setErr('Password at least 6 character long')
            return
        }

        createUser(email, password)
        .then(res=>{
            const createdUser = res.user;
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoUrl
            });
            navigate(from)
            
            
        })
        .catch(err=> {
            setErr(err.message);
            return
        })
    };

    const handleGoogleSinUp = () => {
        googleSignUp()
        .then(res=> {
            setSuccess('User Create Successful !');
            navigate(from)
        })
        .catch(err=>{
            setErr(err.message)
        })
    };

    const handleGithubSinUp = () => {
        githubSignUp()
        .then(res=> {
            setSuccess('User Create Successful !');
            navigate(from)
        })
        .catch(err=>{
            setErr(err.message)
        })
    };

    const handleAccept = (e) => {
        setCheck(e.target.checked)
    };

    return (
            <div className='bg-slate-300 py-8 px-4 flex justify-center items-center'>
                <div className='bg-white p-6 rounded-lg md:w-3/12'>
                    <h1 className='text-3xl font-medium py-6'>Sign Up</h1>
                    <form onSubmit={handleCreateUser}>
                        <input onChange={(e)=>setName(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type="text" name="name" id="name" placeholder='Your Name' />
                        <input onChange={(e)=>setEmail(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type="email" name="email" id="email" placeholder='Your Email' />
                        <br />
                        <input onChange={(e)=>setPassword(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type="password" name="password" id="password" placeholder='Your Password' />
                        
                        <input  onChange={(e)=>setPhotoUrl(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type="url" name="photoUrl" id="photoUrl" placeholder='Photo Link Paste Here (URL)' />
                        <span className='flex justify-between px-2 pb-6'><p><input onClick={handleAccept} required className='accent-orange-600' type="checkbox" name="" id="" /> Accept Terms & Conditions</p> <p>Lost your password?</p></span>
                        {
                           err && <p className='text-xl pb-4 text-red-600 font-medium'>{err}</p>
                        }

                        {
                            success? 
                            
                            <p className='text-xl text-green-600 text-center my-2 py-2'>{success} <Link to='/login' className='text-orange-600 underline font-medium'>Please Sign In</Link></p> 
                            
                            : 
                            
                            <button className='w-full flex justify-center items-center gap-2 px-8 py-2 rounded-lg bg-orange-600 text-white  font-medium text-lg hover:bg-orange-500 duration-300 disabled:bg-gray-300' disabled={!check} >Sign Up </button>
                        }
                    </form>
                    {
                       !success && <p className='text-center my-4'>Already have an account? <Link className='text-orange-500' to='/login'>Sign In !</Link></p>
                    }
                    <hr className='border-1 border-orange-300' />
                    <div>
                        {
                          !success &&  <button onClick={handleGoogleSinUp} className='border border-orange-600 w-full flex justify-center items-center gap-2 px-8 py-2 rounded-lg  font-medium text-lg duration-300 my-4 mt-6 hover:bg-orange-300' ><FaGoogle className='text-2xl' /> Sign Up with Google</button>
                        }

                        {
                          !success &&  <button onClick={handleGithubSinUp} className='border border-orange-600 w-full flex justify-center items-center gap-2 px-8 py-2 rounded-lg  font-medium text-lg duration-300 my-4 mt-6 hover:bg-orange-300' ><FaGithub className='text-2xl' /> Sign Up with Github</button>
                        }
                        
                    </div>
                </div>
            </div>
    );
};

export default Register;