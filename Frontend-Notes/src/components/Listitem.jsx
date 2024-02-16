import React from 'react'
import { Link } from 'react-router-dom'

function Listitem({notes}) {
    const singleNotes = () =>{
    const ss = notes.map(s=>(
        <Link to={`/note/${s.id}`} key={s.id}>
            <div className='flex items-center justify-center'> 
                <div className="flex flex-col mx-auto bg-yy rounded-xl shadow-md overflow-hidden md:max-w-xl m-3">
                <div className="p-8 flex items-center">
                    <div className="pr-4">
                        <p className="text-4xl font-bold">18th</p>
                    </div>
                    <div>
                    <div className="uppercase tracking-wide text-md text-black font-semibold">November, 2023</div>
                    <p className="mt-2 text-black text-sm">9:20 AM - 9: 40 AM</p>
                    <p className="px-10 mt-2 text-black">
                        {s.body.slice(0,25)+("......")}
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </Link>
    ))
    return ss
    }
  return (

        <div>{singleNotes()}</div>

  )
}

export default Listitem