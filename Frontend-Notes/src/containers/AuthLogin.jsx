import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { signInStart, signInSucess, signinFailure } from '../redux/users/users.slice'
import { useDispatch } from 'react-redux'


function AuthLogin() {
    const [formdata,SetFormData] = useState({})

    const navigate = useNavigate()

    const Dispatch = useDispatch()

    const {email,password} = formdata

    console.log(formdata)

    const onChange = (e) =>{SetFormData({...formdata,[e.target.id]:e.target.value})}

    const stringify = JSON.stringify(formdata)
    console.log(stringify)
    const handleonSubmit = async(e) =>{
        e.preventDefault()
        try{
            Dispatch(signInStart())
            const res = await fetch('http://127.0.0.1:8000/auth/jwt/create/',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:stringify
            });
        const data = await res.json()
        if(data.success === false){
            Dispatch(signinFailure(data.message))
            return
        }
        Dispatch(signInSucess(data))
        navigate('/')
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
