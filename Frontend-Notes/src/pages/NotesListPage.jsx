import React, { useEffect, useState } from "react";
import Listitem from "../components/Listitem";

function NotesListPage() {
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
    <div>
      <div className="m-5">
        <Listitem 
        notes = {notes}
        />
      </div>
    </div>
  )
}

export default NotesListPage;
