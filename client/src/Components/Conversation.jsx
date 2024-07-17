import React from 'react'

export default function Conversation() {
  return (
    <>
    <div className="flex items-center gap-2 hover:bg-blue-800 rounded cursor-pointer p-2 py-1">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg" alt='User Profile' />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-white'>User</p>
                <span className='text-xl'>✨</span>
            </div>
      </div>
    </div>

    {/* <div className='divider my-0 py-0 h-1'/> */}

    </>
  );
}
