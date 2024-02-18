import React, { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import Headers from "../components/Headers";
import Listitem from "../components/Listitem";


function NotesListPage({}) {
  const [notes, SetNotes] = useState([]);
  useEffect(()=>{
    getNotes()
  },[])
  // Async => makes a funciton return a promise 
  // Await =>  makes an async function wait for promise
  let getNotes = async ()=>{
    let res = await fetch("http://192.168.1.7:8000/api/list")
    let data = await res.json()
    console.log("Data",data)
    SetNotes(data)
  }
  return(
    <main className="">
        <Headers
          notes = {notes}
        />
      <div className="w-screen h-screen max-w-screen-xl mx-auto  bg-slate-950">
      <Listitem
      notes = {notes}
      />
      <div className="fixed bottom-12 right-6 p-8 flex items-end justify-end w-24 h-24">
        <div className="text-yy shadow-xl items-center rounded-full">
          <AddButton/>
        </div>
      </div>
        </div>
    </main>
  )
}

export default NotesListPage;