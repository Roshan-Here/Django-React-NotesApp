import React from 'react'

function Sortby() {
  return (
    <div className="rounded-lg bg-orange-500 sm:col-span-4">
        <div className="m-2 justify-center items-center">
            <div className="m-2 bg-yellow-400 rounded-xl border-2 border-b-4 border-blue-950">
            <button className="p-2">All Geners</button>
            </div>
            <div className="m-2 bg-yellow-400 rounded-xl border-2 border-b-4 border-blue-950">
            <button className="p-2">Action</button>
            </div>
            <div className="m-2 bg-yellow-400 rounded-xl border-2 border-b-4 border-blue-950">
            <button className="p-2">Comedy</button>
            </div>
            <div className="m-2 bg-yellow-400 rounded-xl border-2 border-b-4 border-blue-950">
            <button className="p-2">Thriller</button>
            </div>
        </div>
    </div>
  )
}

export default Sortby
