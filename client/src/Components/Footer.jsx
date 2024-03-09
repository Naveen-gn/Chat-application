import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='w-full flex justify-evenly border-t p-5 border-gray-500 flex-col md:flex-row gap-6 bg-slate-900' >

        <div className='w-full md:w-32 text-center md:text-left'>
            <p className='text-white'>Made by Naveen</p>
        </div>

        <div className='flex flex-row justify-center gap-6 w-full md:w-64'>
            <FaGithub color="white" size="2em" />
            <FaLinkedin color="white" size="2em" />
            <FaTwitter color="white" size="2em" />
            <FaFacebook color="white" size="2em" />
            <FaInstagram color="white" size="2em" />
        </div>
     
    </div>
  )
}