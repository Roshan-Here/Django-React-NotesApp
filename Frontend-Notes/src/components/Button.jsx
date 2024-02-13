import React from 'react'

let aravind = "Aravind is GOAT"

var count = 1

function Button() {
  return (
    <div>
      <button className='ml-3 w-64 h-10 bg-slate-800  text-white ' type="button">{aravind}</button>
      <button className={getcolor()} type="button">{count}</button>
    </div>
  )
}

export default Button

const getcolor = () =>{
    let warn = "ml-3 w-64 h-10 bg-yellow-200 font-extrabold text-"
    warn +=  count ===0 ? "red-600" : "blue-700"
    return warn
} 