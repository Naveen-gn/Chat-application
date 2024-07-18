import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import useConversation from '../store/useConversation';
import { extractTime } from '../hooks/extractTime';

export default function Message({message}) {
 const {authUser} = useAuthContext();
 const {selectedConversation}=useConversation();
 const fromMe = message.senderId === authUser._id;
 const formatedTime = extractTime(message.createdAt);
 const chatClassName = fromMe ? 'chat-end' : 'chat-start';
 const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
 const bubbleBgColor = fromMe ? 'bg-blue-900' : 'bg-slate-600';
 const shakeClass = message.shouldShake?'shake':'';

  return (
    <div>
      <div className={`chat ${chatClassName} py-2`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Avatar"
              src={profilePic}
            />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center mt-1">{formatedTime}</div>
      </div>

    </div>
  );
}
