import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../store/useConversation';
import useGetConversations from '../hooks/useGetConversation';
import toast from 'react-hot-toast';

export default function Searchinput() {
  const [search, setSearch] = useState('');
  const {setSelectedConversation}=useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('Search term must be atleast 3 characters long');
    }
    const conversation = conversations.find((conversation) => conversation.name.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }
    else{
      toast.error('No user found.');
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs rounded-full bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-circle bg-blue-700 hover:bg-blue-600">
          <FaSearch className="w-5 h-5 text-white" />
        </button>
      </form>
  )
}
