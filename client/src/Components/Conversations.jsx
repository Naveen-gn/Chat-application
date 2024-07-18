import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../hooks/useGetConversation'
import { getRandomEmoji } from '../hooks/emojis';

export default function Conversations() {
 const {loading,conversations} = useGetConversation();
 console.log("Conversations are",conversations);
  return (
    <div className='flex flex-col py-2 gap-3 overflow-auto'>
      {conversations.length === 0 && !loading && <p className="text-white text-center">No users found to chat</p>}
      {conversations.map((conversation,idx) => (
        <Conversation 
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length - 1}
        />
        ))}
       {loading? ( <span className="loading loading-spinner text-white"></span>):null}
    </div>
  )
}
