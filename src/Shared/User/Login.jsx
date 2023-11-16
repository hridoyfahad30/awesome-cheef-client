import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');
    const [check, setCheck] = useState(false);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const {user, logIn, googleSignUp} = useContext(AuthContext);


    const handleEmailLogin = (e) => {
        e.preventDefault();

        setSuccess('');
        setErr('');

        logIn(email, password)
        .then(res=> {
            const loggedInUser = res.user;
            setSuccess("Signed In");
            navigate(from)
        })
        .catch(err => {
            setErr(err.message)
        })
    };

    const handleGoogleSinUp = () => {
        googleSignUp()
        .then(res=> {
            setSuccess('Signed In')
            navigate(from)
        })
        .catch(err=>{
            setErr(err.message)
        })
    };

    const handleGithubSinUp = () => {
        githubSignUp()
        .then(res=> {
            setSuccess('Signed In')
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
        <div className='bg-slate-300 py-8 px-4 flex justify-center items-center '>
            <div className='bg-white p-6 rounded-lg w-full md:w-3/12'>
                <h1 className='text-3xl font-medium py-6'>Sign In</h1>
                <form onSubmit={handleEmailLogin}>
                    <input onChange={(e)=> setEmail(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type="email" name="email" id="email" placeholder='Your Email' />
                    <br />
                    <input onChange={(e)=> setPassword(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type={check? 'text' : 'password'} name="password" id="password" placeholder='Your Password' />
                    <span className='flex justify-between px-2 pb-6'><p><input onClick={handleAccept} className='accent-orange-600' type="checkbox" name="" id="" /> Show password</p> <p>Lost your password?</p></span>
                    {
                           err && <p className='text-xl pb-4 text-red-600 font-medium'>{err}</p>
                    }

                    {
                      user? <p className='text-xl text-green-600 text-center my-2 py-2'>{success}</p> :  <button className='w-full flex justify-center items-center gap-2 px-8 py-2 rounded-lg bg-orange-600 text-white  font-medium text-lg hover:bg-orange-500 duration-300 disabled:bg-gray-300' disabled={!email || !password} >Sign In </button>
                    }
                </form>
                    {
                       !user && <p className='text-center my-4'>Don&apos;t have an account? <Link className='text-orange-500' state={{from: location}} to='/register'>Sign Up !</Link></p>
                    }
                    
                    <hr className='border-1 border-orange-300' />
                    <div>
                        {
                          !user &&  <button onClick={handleGoogleSinUp} className='border border-orange-600 w-full flex justify-center items-center gap-2 px-8 py-2 rounded-lg  font-medium text-lg duration-300 my-4 mt-6 hover:bg-orange-300' ><FaGoogle className='text-2xl' /> Sign In with Google</button>
                        }

                        {
                          !user &&  <button onClick={handleGithubSinUp} className='border border-orange-600 w-full flex justify-center items-center gap-2 px-8 py-2 rounded-lg  font-medium text-lg duration-300 my-4 mt-6 hover:bg-orange-300' ><FaGithub className='text-2xl' /> Sign In with Github</button>
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default Login;