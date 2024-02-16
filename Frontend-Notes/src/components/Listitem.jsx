import React from 'react'
import { Link } from 'react-router-dom'

function Listitem({notes}) {
const singleNotes = () =>{
    const ss = notes.map(s=>(
        <Link to={`/note/${s.id}`} key={s.id}> 
            <h3 className="m-10 bg-black text-white">
            {s.body}
            </h3>
        </Link>
    ))
    return ss
    }
  return (

        <div>{singleNotes()}</div>

  )
}

export default Listitem