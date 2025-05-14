import React, { useContext, useState } from 'react'
import { LOGO } from '../utils/constant'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'
import { logDOM } from '@testing-library/react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const [btnName, setBtnName] = useState("Log In")
  const{ loggedInUser} = useContext(UserContext)

  const cart = useSelector((store)=>store.cart.items)

  return (
    <div className='header'>
        <div className='logo' >
            <img src={LOGO} alt="Logo_Image" />
            <h1>🌏Pune</h1>
        </div>
        <div className='nav'>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/instamart">Instamart</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                  </li>
                <li>
                  <Link to="/contact">Contact </Link>
                </li>
                <li>
                  <Link to="/cart">Cart({cart.length} Items)</Link>
                </li>
                <li>
                <button className='btn-login'
                onClick={()=>{
                  btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In")
                }
              }>{btnName}</button>
              </li>
              <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
  )
}
