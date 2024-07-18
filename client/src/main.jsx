import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext';
import SocketContextProvider from './context/SocketContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider >
   <SocketContextProvider>
      <App/>
   </SocketContextProvider>
  </AuthContextProvider>
)
