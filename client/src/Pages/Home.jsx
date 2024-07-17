import React from 'react'
import Sidebar from '../Components/Sidebar'
import Messagecontainer from '../Components/Messagecontainer'


export default function Home() {
  return (
    <div className='flex flex-row'>
    <Sidebar/>
    <Messagecontainer/>
    </div>
  )
}
