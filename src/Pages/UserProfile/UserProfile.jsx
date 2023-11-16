import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaCheckCircle } from 'react-icons/fa';


const UserProfile = () => {
    const [profileUrl, setProfileUrl] = useState(null);

    const {user, loading, userProfileImageUpdate} = useContext(AuthContext);

    if(loading){
        return <button className="btn loading bg-orange-500 m-8 ml-96">loading</button> 
    }

    const {photoURL, displayName, email, emailVerified, } = user;


    const profileImageUpdate = () => {
        
        userProfileImageUpdate(profileUrl)
        .then((res) => {
            alert('Photo Update')
        })
        // console.log(profileUrl);
    }



    return (
        <div className="container mx-auto mt-6">
            <img className='w-full h-36 md:h-56 rounded-md' src="https://i.ibb.co/84rFXQ9/userbanner.jpg" alt="" />
            
            <div className="avatar">
                <div className="w-32 md:w-40 shadow-2xl shadow-orange-500 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2 ml-24 -mt-16">
                    <img src={photoURL} />
                </div>
            </div>

            <div className='my-8 mt-12 md:mt-20 flex justify-center '>
                    <div className='backdrop-brightness-50 backdrop-blur-sm text-white p-8 md:p-20 rounded-2xl w-96 md:w-8/12 shadow-2xl shadow-orange-500'>
                        <h2 className='text-2xl md:text-5xl font-semibold mb-6'>{displayName}</h2>
                        <h4 className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2 text-xl'>Email: {email} 
                        
                            {
                                emailVerified?
                                
                                <span className='bg-green-600 py-2 px-4 rounded-3xl md:ml-2 flex'>
                                    <p className='flex items-center gap-2'>Verified <FaCheckCircle className='text-2xl' /> </p>
                                </span>

                                :

                                <span className='bg-red-600 py-2 px-4 rounded-3xl md:ml-2 flex'>
                                    <p className='flex items-center gap-2'>Not Verified <FaCheckCircle className='text-2xl' /> </p>
                                </span>
                            
                            }
                        </h4>
                        <div className='my-4'>
                            <label htmlFor="my-modal-3" className="btn bg-orange-600 text-white hover:bg-white hover:text-black">Update Profile Image</label>
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal text-black">
                                <div className="modal-box relative ">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-orange-600">✕</label>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-xl ml-2 font-semibold mt-8'>Image Link</label>

                                        <input  onChange={(e)=>setProfileUrl(e.target.value)} required className='p-4 bg-gray-200 my-2 w-full rounded-lg text-black text-lg placeholder:text-gray-600 outline-orange-500' type="url" name="photoUrl" id="photoUrl" placeholder='Photo Link Paste Here (URL)' />

                                        <button onClick={()=>profileImageUpdate} className='w-full bg-orange-600 py-2 text-lg text-white font-bold rounded-2xl hover:text-black hover:bg-orange-500'>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserProfile;