import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'
import { useNavigate } from 'react-router-dom'
const baseUrl = 'http://localhost:5000/';

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleGoogleClick=async()=>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt: 'select_account'})
        try {
            const resultFromGoogle = await signInWithPopup(auth,provider)
            const res = await fetch(`${baseUrl}api/auth/google`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    googlephotoUrl: resultFromGoogle.user.photoURL,
                }),
            })
            const data=await res.json()
            if (res.ok){
                dispatch(signInSuccess(data));
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }

    }
  return (
    <button type='button' className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500" onClick={handleGoogleClick}>Continue with google</button>
  )
}
