import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
<div className='w-full h-screen bg-slate-900 flex flex-wrap justify-center '>


<div className='w-full sm:w-1/2 md:w-full lg:w-1/2  '>
  <h1>div1</h1>
  </div>

<div className="  w-full sm:w-1/2 md:w-full lg:w-1/2  flex justify-center items-center " >
  <div  className='rounded-lg p-12 border border-blue-600 w-full   md:w-3/5 shadow shadow-slate-700'>
  <h4 className='text-white mb-6 text-center '>Sign in</h4>
        <div className='flex flex-col gap-6 justify-center  '>
        <input
          type="email"
          className=" w-full px-4 py-2 rounded-2xl border border-blue-600 focus:outline-none"
          placeholder="example@gmail.com"
        />
        <input
          type="password"
          className=" w-full px-4 py-2 border border-blue-600 rounded-2xl focus:outline-none"
          placeholder="password"
        />
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
