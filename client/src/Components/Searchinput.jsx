import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Searchinput() {
  return (
    <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs rounded-full bg-transparent"
        />
        <button className="btn btn-circle bg-blue-700 hover:bg-blue-600">
          <FaSearch className="w-5 h-5 text-white" />
        </button>
      </form>
  )
}
