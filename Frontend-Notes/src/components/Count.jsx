import React from 'react'

let num = 2

const cc = () =>{

    return num === 0 ? 'Zero' : num
}

function Count() {
  return (
    <div>
      <button className='m-2 w-20 h-10 text-white bg-cyan-700' type="button">{cc()}</button>
    </div>
  )
}

export default Count
