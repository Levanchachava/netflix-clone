import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
import { UserAuth } from '../context/AuthContext'

function LogIn() {

  const{user, logIn} = UserAuth()
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await logIn(email,password)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='signup-cont'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
    <div className='signup-box'>
       <div className='signup-box-cont'>
         <h1>Sign In</h1>
         <form onSubmit={handleLogin} className='form-cont'>
             <input onChange={(e)=> setEmail(e.target.value)} className='inpeml' type="email" autoComplete='email' placeholder='Email' />
             <input onChange={(e)=> setPassword(e.target.value)} className='inppsw' type="password" placeholder='Password' />
             <button>Sign In</button>
             <div className='info-cont'>
               <input type="checkbox" />
               <p className='rememberme'>Remember me</p>
               <p className='needhelp'>Need Help?</p>
             </div>
         </form>
           <p className='login'>New to to Netflix? <span> <Link to="/signup"  > Sign Up </Link> </span> </p>
       </div>
    </div>
 </div>
  )
}

export default LogIn