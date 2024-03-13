import React from 'react'
import Chaticon from '../assets/chat.png'
import { AiOutlineInfoCircle, AiOutlineUser, AiOutlineEye, AiOutlineLink,AiOutlineBulb } from 'react-icons/ai';

export default function About() {
  return (
<div className='About w-full h-screen mb-10 overflow-y-scroll'>
         <div className='mb-5'>
            <h1 className='text-white mt-10 text-center text-4xl'>Welcome to <span className='text-blue-600 font-semibold text-5xl'>N_chat</span></h1>
        </div>

    <div className='flex mt-20 flex-row flex-wrap w-full justify-center '>

        <div className="mt-10 w-full flex justify-center lg:w-2/5">
            <img src={Chaticon} className='w-80 h-72 z-0' />
        </div>

        <div className='text-white w-full lg:w-3/5 flex flex-row flex-wrap justify-evenly gap-5 '>

            <div className='w-80 ' >
                <h1 className='text-2xl font-semibold flex flex-row items-center gap-3'><AiOutlineInfoCircle />About us </h1>
                <p className='mt-5 text-md text-gray-400'>Welcome to N_chat, the revolutionary chat application crafted by Naveen. Harnessing the power of cutting-edge technologies including React JS, Tailwind CSS, Node JS, Express JS, Mongo DB, and Firebase, N_chat promises a seamless and secure chatting experience like never before.</p>
            </div>

            <div className='w-80 ' >
                <h1 className='text-2xl font-semibold flex flex-row items-center gap-3'><AiOutlineUser/>Meet Naveen:</h1>
                <p className='mt-5 text-md text-gray-400'>N_chat is the brainchild of Naveen, a visionary developer passionate about creating innovative solutions for modern communication needs. With N_chat, Naveen aims to revolutionize the way people connect and interact online.</p>
            </div>

            <div className='w-80 text-md' >
                <h1 className='text-2xl  font-semibold flex flex-row items-center gap-3'><AiOutlineBulb/>Our Mission</h1>
                <p className='mt-5 text-md text-gray-400'>Our mission is to provide a secure and seamless chatting experience to users across the globe. We are committed to ensuring that our users can chat with their friends and family without any interruptions or security concerns.</p>
            </div>

           
            <div className='w-80' >
                <h1 className='text-2xl font-semibold flex flex-row items-center gap-3'><AiOutlineEye/>Our Vision</h1>
                <p className='mt-5 text-md text-gray-400'>Our vision is to become the go-to chat application for users worldwide. We aim to provide a platform that is not only secure and reliable but also user-friendly and feature-rich.</p>
            </div>

            <div className='w-80' >
                <h1 className='text-2xl font-semibold flex flex-row items-center gap-3'><AiOutlineLink/>Connect Seamlessly:</h1>
                <p className='mt-5 text-md text-gray-400'>N_chat makes connecting with friends, family, and colleagues effortless. Whether you're engaging in private conversations, joining lively group chats, or exploring new communities, N_chat provides the perfect platform for communication.</p>
            </div>
   
        </div>
        

    </div>
        
</div>
       
  )
}
