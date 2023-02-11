import React from 'react'
import "./Style.css"
import {NavLink} from "react-router-dom"
import { useSelector } from 'react-redux'   

import { BiHome } from 'react-icons/bi';
import { GiStairsGoal } from 'react-icons/gi';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { RiStethoscopeLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs'

const Header = () => {
  const isLoggedIn = useSelector( state => state.UserLoggedIn);
  const perspective= useSelector(state=>state.UserReducer);

  return (
   <nav>
        <h3 className='green'>Sanjeevan<span className='pink'>Stro</span>^</h3>
    <ul className='green'>
    {
         isLoggedIn || <>
         <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
       <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/sign-up">Sign Up</NavLink></li></>
        }  

   {  isLoggedIn && <>
         <li><NavLink index to="/"><BiHome size={20} /> Home</NavLink></li>
        <li><NavLink to="/goals"><GiStairsGoal size={20}/> Goals</NavLink></li>
        <li><NavLink to="/shop"><RiShoppingBag3Line size={20}/> Shop</NavLink></li>
        { ! perspective || <li><NavLink to="/providers"><RiStethoscopeLine size={20} /> Providers</NavLink></li>}
        <li><NavLink to="/profile"><AiOutlineUser size={20} /> Profile</NavLink></li>
        <li><NavLink to="/cart"><BsCart4 size={20}/> Cart</NavLink></li>
         </>
        }
        

    

    </ul>
   </nav>
  )
}

export default Header