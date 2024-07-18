import React from 'react'
import useConversation from '../store/useConversation';
import { useSocketContext } from '../context/SocketContext';

export default function Conversation({conversation,emoji}) {
  const {selectedConversation, setSelectedConversation}=useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers}=useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
    <div className={`flex items-center gap-2 hover:bg-blue-800 rounded cursor-pointer p-2 py-1
      ${isSelected ? 'bg-blue-800' :''}`}
      onClick={() => setSelectedConversation(conversation)}
      >
      <div className={`avatar ${isOnline?"online":""}`}>
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} alt='User Profile' />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-white'>{conversation.name}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
      </div>
    </div>

    {/* <div className='divider my-0 py-0 h-1'/> */}

    </>
  );
}
