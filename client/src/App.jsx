import React from 'react'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Chats from './Pages/Chats'

// import Footer from './Components/Footer'

export default function App() {
  
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Chats/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    {/* <Footer/> */}
   </Router>
  )
}
