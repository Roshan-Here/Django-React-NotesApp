import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import { signInStart } from '../redux/users/users.slice'
import { useDispatch } from 'react-redux'


function AuthLogin() {
    const [formdata,SetFormData] = useState({})

    const Dispatch = useDispatch()

    const {email,password} = formdata

    console.log(formdata)

    const onChange = (e) =>{SetFormData({...formdata,[e.target.id]:e.target.value})}

    const srignify = JSON.stringify(formdata)
    console.log(srignify)
    const handleonSubmit = async(e) =>{
        e.preventDefault()
        try{
            Dispatch(signInStart)
            const res = await fetch('/auth/users/',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:srignify
            });
        }catch(e){
            console.log('err',e)
        }
    }
        // login action(email,password)

    // is the user authenticated ?
    // Redirect them to home page

  return (
    <div>
      <h1>Sign In</h1>
      <p>Sign in to your Account</p>
        <form onSubmit={(e)=>handleonSubmit(e)}>
                <div className="mt-4">
                    <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                    <input 
                        id='email'
                        type="text" 
                        className="p-2 shadow-md w-64 rounded-full border border-gray-300" 
                        placeholder='Email'
                        onChange={onChange} 
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
                    <input 
                        id='password' 
                        type="password" 
                        className="p-2 shadow-md w-64 rounded-full border border-gray-300" 
                        placeholder='password'
                        onChange={onChange}
                        minLength='6' 
                        required 
                    />
                </div>
                <button 
                    className='mt-2 w-72 bg-blue-400 rounded-md border border-transparent hover:bg-indigo-400 focus:outline-none' 
                    type="submit"
                    >Login
                </button>
        </form>
        <p className="mt-3">
            Dont have an acccount ? <Link to={'/signup'}>SignUp</Link>
        </p>
        <p className="mt-e">
            Forgot Password ? <Link to={'/reset-password'}>Reset Now !</Link>
        </p>
    </div>
  )
}

// const mapStateToProps = state =>({
    // isAuthenticated
// })

export default AuthLogin
