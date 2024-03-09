import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
<div className='w-full h-screen  bg-slate-900 flex flex-wrap justify-center '>


<div className='w-full mb-10  md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2  flex justify-center items-center '>
<div className="flex flex-col justify-center items-center gap-4">
  <Link to='/' className='text-decoration-none text-white bg-gradient-to-r from-blue-700 via-grey-300 to-grey-500  rounded-full text-3xl p-4'>N-chat</Link>
  <div className='w-3/4 sm:3/4'>
  <h1 className='text-white text-center'>You're connecting with friends, family, or colleagues, our platform provides a seamless and secure way to stay connected.</h1>
  </div>
  
  </div>
  </div>

<div className="w-full  md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center items-center  " >
  <div  className='w-96 p-12 rounded-3xl border border-blue-600    shadow shadow-slate-70'>
  <h4 className='text-white mb-6 text-center '>Sign in</h4>
        <div className='flex flex-col gap-6 justify-center  '>
        <input
          type="email"
          className=" w-full px-4 py-2 rounded-2xl border border-blue-600 focus:outline-none"
          placeholder="example@gmail.com"
        />
        <div className="relative">
      <input
        type={passwordShown ? "text" : "password"}
        className="w-full px-4 py-2 border border-blue-600 rounded-2xl focus:outline-none"
        placeholder="password"
        autoComplete='off'
        onCopy={(e) => e.preventDefault()}
      />
      <i 
        onClick={togglePasswordVisiblity} 
        className="absolute top-2 right-2 cursor-pointer text-blue-800"
      >
        {passwordShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
      </i>
    </div>
      
        {/* <input
          type="password"
          className=" w-full px-4 py-2 border border-blue-600 rounded-2xl focus:outline-none"
          placeholder="password"
          
        /> */}
        <button  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 text-center ">Signin</button>
        </div>
        <div className='flex flex-col gap-4 mt-5'>
        <h4 className='text-white text-center'>Or continue with google</h4>
        <div className='w-full flex justify-center '>
        <button  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">continue with google</button>
        </div>
        <h4 className='text-white'>Don't haven an account! <Link to='/signup' className='text-decoration-none text-blue-600 hover:text-blue-500'>Sign up</Link></h4>
        </div>
      </div>

  </div>
        


      
   

</div>

   
  )
}
