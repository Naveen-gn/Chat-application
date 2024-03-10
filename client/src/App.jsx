import React from 'react'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Chats from './Pages/Chats'
import Profile from './Pages/Profile'
import PrivateRoute from './Components/PrivateRoute'

// import Footer from './Components/Footer'

export default function App() {
  
  return (
   <Router>
    <Navbar/>
    <Routes>
    <Route element={<PrivateRoute/>} >
      <Route path='/' element={<Chats/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    {/* <Footer/> */}
   </Router>
  )
}
