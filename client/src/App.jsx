import React from 'react'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Chats from './Pages/Chats'


export default function App() {
  
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Chats/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </Router>
  )
}
