import React from 'react'

function Sortby({Genereslist,HandleonAction,HandleReset}) {
  return (
    <div className="rounded-lg bg-orange-500 sm:col-span-4">
        <div className="m-2 justify-center items-center">
            <div className="m-2 bg-yellow-400 rounded-xl border-2 border-b-4 border-blue-950">
              <button onClick={()=>{HandleReset()}} className="p-2">All Geners</button>
            </div>
            {Genereslist.map(v=>(
              <div key={v._id} className="m-2 bg-yellow-400 rounded-xl border-2 border-b-4 border-blue-950">
                <button onClick={()=>{HandleonAction(v.name)}} className="p-2">{v.name}</button>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Sortby
