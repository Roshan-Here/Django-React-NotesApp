import React, { useState } from 'react'
import NavbarForMovies from './NavbarForMovies'

function LoginForm() {
    const [name,Setname]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("submitted")
    }
  return (
    <>
    <NavbarForMovies/>
      <div className="mt-16">
          <form onSubmit={()=>handleSubmit}>
            <div className="mt-4">
                <label htmlFor="username" className='block text-sm font-medium mb-2'>Username</label>
                <input onChange={e=>Setname(e.target.value)} id='username' type="text" className="shadow-md w-64 rounded-full border border-gray-300" placeholder='username' />
            </div>
            <div className="mt-4">
                <label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
                <input id='password' type="password" className="shadow-md w-64 rounded-full border border-gray-300" placeholder='password' required />
            </div>
            <button className='mt-2 w-72 bg-blue-400 rounded-md border border-transparent hover:bg-indigo-400 focus:outline-none' type="submit">Login</button>
          </form>
      </div>
      <h1>My name is {name}</h1>
    </>
  )
}

export default LoginForm
