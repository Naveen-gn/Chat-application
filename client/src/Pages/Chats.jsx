import React from 'react'

export default function Chats() {
  return (
    <>
    <div className='Leftside w-3/12 h-screen overflow-auto'>
      
    <div className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <img src='https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt='user' className='w-10 h-10 rounded-full' />
            <div className='ml-5'>
              <h3 className='text-white font-semibold'>John Doe</h3>
              <p className='text-gray-400 text-xs'>Active now</p>
            </div>
        </div>
    </div>

    <div className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <img src='https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg' alt='user' className='w-10 h-10 rounded-full' />
            <div className='ml-5'>
              <h3 className='text-white font-semibold'>John Doe</h3>
              <p className='text-gray-400 text-xs'>Active now</p>
            </div>
        </div>
    </div>



    </div>
    
    <div className='Rightside'></div>
    </>
  )
}
