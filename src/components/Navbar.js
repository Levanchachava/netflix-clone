import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css"
import { UserAuth } from '../context/AuthContext'
import { async } from '@firebase/util'

function Navbar() {

  const{user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='navbar-cont'>
        <Link to="/"> <h2> NETFLIX </h2> </Link>

        {user?.email ? <div className='btn-cont'>
            <Link to="/account"> <button style={{background: "transparent"}} >Account</button> </Link>
             <button onClick={handleLogout} >Logout</button> 
        </div> : 
        <div className='btn-cont'>
          <Link to="/login"> <button style={{background: "transparent"}} >Sign In</button> </Link>
          <Link to="/signup"> <button>Sign Up</button> </Link>
        </div>
        
        }

    </div>
  )
}

export default Navbar