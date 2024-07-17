import React,{ useState } from 'react';
import { BiSend } from 'react-icons/bi'
import useSendMessage from '../hooks/useSendMessage';


export default function Messageinput() {
  const [message,setmessage]=useState("");
  const {loading,sendMessage} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message.trim()) return;
    await sendMessage(message);
    setmessage("");
  };
  return (
    <div className="bg-slate-800 pt-3 p-2 sticky bottom-0 w-full">
          <form className=" px-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
              <input
                type="text"
                className="w-full grow  bg-[#0f172a] text-white  input input-bordered rounded-xl "
                placeholder="Send a message..."
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button className="absolute inset-y-0 end-0 flex items-center pe-3" type='submit'>
              {loading ? (<span className="loading loading-spinner text-white"></span>) : (
                  <BiSend className="text-white w-5 h-5" />
                )}
               
              </button>
            </div>
          </form>
        </div>
    
  )
}
