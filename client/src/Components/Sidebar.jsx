import React from "react";
import Searchinput from "./Searchinput"
import Conversations from "./Conversations";
import Logoutbutton from './Logoutbutton'

export default function Sidebar() {
  return (
    <div className="Leftside w-full sm:w-1/3 lg:w-1/4 min-h-screen p-4 flex flex-col border-r border-slate-500">
      <Searchinput/>
      <div className="divider "></div>
      <Conversations/>
      <Logoutbutton/>
    </div>
  );
}
