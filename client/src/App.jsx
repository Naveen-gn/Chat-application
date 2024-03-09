import React from 'react'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

export default function App() {
  return (
    <div className='h-screen bg-slate-900'>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </Router>
    </div>
  )
}
