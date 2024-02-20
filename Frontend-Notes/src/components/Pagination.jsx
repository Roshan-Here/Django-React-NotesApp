import React from 'react'

function Pagination({Numbers,PrevPage,NextPage,ChangeCpage}) {
    
    return (
    <div className="flex justify-center">
    <div className="flex space-x-2" aria-label="Pagination">
        <a  onClick={()=>{PrevPage()}}
            className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-black text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-red-800 focus:z-10">
            Previous
        </a>
        {
            Numbers.map((n,i)=>(
                <a key={i} onClick={()=>ChangeCpage(n)} className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:border-red-500 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                {n}
                </a> 
            ))
        }
        <a onClick={()=>{NextPage()}} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
            Next
        </a>
    </div>
  </div>
  )
}

export default Pagination
