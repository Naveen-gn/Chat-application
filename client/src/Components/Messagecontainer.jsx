import React from "react";
import Messages from "./Messages";
import Messageinput from "./Messageinput";
import { TiMessages } from "react-icons/ti";
import  useConversation  from "../store/useConversation";
import { useEffect } from "react";

export default function Messagecontainer() {
  const {selectedConversation, setSelectedConversation}=useConversation();
  useEffect(()=>{
    return ()=> setSelectedConversation(null);
  },[])
  return (
    <div className="Messagecontainer  sm:w-2/3 lg:w-3/4 hidden sm:block h-screen overflow-y-auto min-h-screen scrollbar-thin ">
      {!selectedConversation ? <Nochatselected /> : (
        <>
        <div className="w-full bg-slate-800 px-4 py-2 mb-2 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="avatar online">
              <div className="w-9 rounded-full">
                <img
                  src={selectedConversation.profilePic}
                  alt="User Profile"
                />
              </div>
            </div>
            <span className="text-white font-medium">{selectedConversation.name}</span>
          </div>
        </div>
        <Messages />
        <Messageinput />
      </>
      )}
    </div>
  );
}

const Nochatselected = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2">
          <p>Welcome 👋🏼 Naveen ✨</p>
          <p>Select a chat to start message.</p>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
    </div>
  );
}