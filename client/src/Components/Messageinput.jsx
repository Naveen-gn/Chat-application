import React from 'react'
import { BiSend } from 'react-icons/bi'


export default function Messageinput() {
  return (
    <div className="bg-slate-800 pt-3 p-2 sticky bottom-0 ">
          <form className=" px-3">
            <div className="w-full relative">
              <input
                type="text"
                className="w-full grow  bg-[#0f172a] text-white  input input-bordered rounded-xl "
                placeholder="Send a message..."
              />
              <button className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BiSend className="text-white w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
    
  )
}
