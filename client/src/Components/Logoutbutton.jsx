import React,{ useState } from 'react'
import {BiLogOut} from 'react-icons/bi'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'

export default function Logoutbutton() {
  const {setAuthUser}=useAuthContext();
  const [loading,setLoading] = useState(false)
  const handleLogout = async() => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/logout",{
        method:"POST",
        headers:{"Content-Type":"application/json"}
      });
      const data =await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.removeItem("access_token")
      localStorage.removeItem("chat-user")
      setAuthUser(null)

      
    } catch (error) {
      toast.error(error.response.data.message)
    } finally{
      setLoading(false)
    }
  }
  return (
    <div className='mt-auto'>
      {!loading ? (<BiLogOut className=' text-white w-6 h-6 cursor-pointer' onClick={handleLogout}/>): (<span className='loading loading-spinner'></span>)}
    </div>
  )
}
