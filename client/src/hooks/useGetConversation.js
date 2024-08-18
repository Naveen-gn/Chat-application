import React,{ useEffect,useState } from 'react';
import { toast } from 'react-hot-toast';


const useGetConversation = () => {
 const [loading, setLoading]= useState(false);
 const [conversations, setConversations]= useState([]);
 useEffect(()=>{
    const getConversations = async () => {
        setLoading(true);
        try {
            const jwt = document.cookie.split('; ').find(row => row.startsWith('jwt=')).split('=')[1];
            console.log("jwt",jwt);
            
            const res = await fetch('https://chat-app-server-chi-three.vercel.app/api/users', {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
            
        } finally {
            setLoading(false);
        }
    }
    getConversations();
 },[])
    return {loading, conversations};
}

export default useGetConversation