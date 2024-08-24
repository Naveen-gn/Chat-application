import React,{ useEffect,useState } from 'react';
import { toast } from 'react-hot-toast';
import { API_URL } from '../config';


const useGetConversation = () => {
 const [loading, setLoading]= useState(false);
 const [conversations, setConversations]= useState([]);
 useEffect(()=>{
    const getConversations = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("access_token")}`,
                },
            }
            );
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data);
        } catch (error) {
            toast.error(error.message,"Name not found");
            
        } finally {
            setLoading(false);
        }
    }
    getConversations();
 },[])
    return {loading, conversations};
}

export default useGetConversation