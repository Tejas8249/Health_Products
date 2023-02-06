import React from 'react'
import { NavLink } from 'react-router-dom';
import './Mainheader.css';
import { BiHome } from 'react-icons/bi';
import { GiStairsGoal } from 'react-icons/gi';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { RiStethoscopeLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs'

const Mainheader = () => {
  return (
    <nav>
       <h3 className='green'>Sanjeevan<span className='pink'>Stro</span>^</h3>
       <ul className='green'>
        <li><NavLink to="/home"><BiHome size={20} className="green"/> Home</NavLink></li>
        <li><NavLink to="/goals"><GiStairsGoal size={20} className="green"/> Goals</NavLink></li>
        <li><NavLink to="/shop"><RiShoppingBag3Line size={20} className="green"/> Shop</NavLink></li>
        <li><NavLink to="/providers"><RiStethoscopeLine size={20} className="green"/> Providers</NavLink></li>
        <li><NavLink to="/profile"><AiOutlineUser size={20} className="green"/> Profile</NavLink></li>
        <li><NavLink to="/cart"><BsCart4 size={20} className="green"/> Cart</NavLink></li>
    </ul>
    </nav>
  )
}

export default Mainheader