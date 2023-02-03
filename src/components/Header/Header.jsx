import React from 'react'
import "./Style.css"
import {NavLink} from "react-router-dom"
import { useSelector } from 'react-redux'

const Header = () => {
  const isLoggedIn = useSelector( state => state.UserLoggedIn);
  return (
   <nav>
        <h3 className='green'>Sanjeevan<span className='pink'>Stro</span>^</h3>
    <ul className='green'>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        {
         isLoggedIn || <><li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/sign-up">Sign Up</NavLink></li></>
        }
    </ul>
   </nav>
  )
}

export default Header