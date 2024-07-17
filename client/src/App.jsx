import React from 'react'
import { BrowserRouter as Router, Routes,Route, Navigate  } from 'react-router-dom'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


export default function App() {
 const {authUser} = useAuthContext();
  return (
   <Router>
    <Routes>
      <Route path='/' element={authUser?<Home/>:<Navigate to='/signin'/>}/>
      <Route path='/signup' element={authUser?<Navigate to='/'/>:<Signup/>}/>
      <Route path='/signin' element={authUser?<Navigate to='/'/>:<Signin/>}/>
    </Routes>
    <Toaster/>
   </Router>
  )
}
