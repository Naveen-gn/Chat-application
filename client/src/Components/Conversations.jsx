import React from 'react'
import Conversation from './Conversation'

export default function Conversations() {
  return (
    <div className='flex flex-col py-2 gap-3 overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}
