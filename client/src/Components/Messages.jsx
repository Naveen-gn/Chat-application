import React,{ useEffect,useRef } from 'react';
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeletons from './MessageSkeletons'
import useListenMessages from '../hooks/useListenMessages';

export default function Messages() {
  const {messages,loading} = useGetMessages();
 useListenMessages();
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:'smooth'});
    },100)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) =>(
        <div 
        key={message._id}
        ref={lastMessageRef}
        >
          <Message  message={message} />
        </div>
      )
        )}
      {loading && [...Array(3)].map((_,index) => <MessageSkeletons key={index} />)}
      {!loading && messages.length === 0 &&(<p className='text-center mt-5 text-white font-medium text-mg'>Send a message to start a conversation.</p>)}
    </div>
  )
}
