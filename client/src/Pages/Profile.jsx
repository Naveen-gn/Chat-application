import React from 'react'
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom'

const baseUrl = 'http://localhost:5000/';


export default function Profile() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const handleSignout = async (e) => {
e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}api/user/signout`, {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
        navigate('/signin')
      } else {
        dispatch(signoutSuccess());
        navigate('/signin')
        
      }
    } catch (error) {
      console.log(error.message);
      
    }
  };
  return (
    <>
      <div className='Profile flex flex-col justify-center items-center gap-10 overflow-y-scroll'>
          <div><h1 className='text-white text-3xl text-center mt-10'>My Profile</h1></div>

          <div className='mt-2'><img alt='user' src={currentUser.profilePicture} className="rounded-full h-40 w-40" /></div>

          <div className='flex flex-col gap-5 justify-between min-w-80'>

          <div className='flex items-center gap-6 border p-4 px-4 rounded-2xl sm:p-5 sm:px-10'>
            <FaUser color='white' size='2em' />
            <h1 className='text-white text-lg sm:text-xl'>{currentUser.username}</h1>
          </div>

          <div className='flex items-center gap-6 border p-5  rounded-2xl'>
            <FaEnvelope color='white' size='2em' />
            <h1 className='text-white text-lg sm:text-xl'>{currentUser.email}</h1>
          </div>

          <form className='flex  gap-6 mx-auto' >
            <button onClick={handleSignout} className='bg-blue-700 border hover:bg-blue-600 p-4 px-10 rounded-2xl text-white text-xl' type='submit'>Sign out</button>
          </form>

          </div>


      </div>
    </>
  )
}