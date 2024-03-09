import React from 'react'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

export default function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </Router>
  )
}
