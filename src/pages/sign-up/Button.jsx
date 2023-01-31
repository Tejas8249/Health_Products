import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaMobileAlt } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineUser } from "react-icons/ai"
import { TbStethoscope } from "react-icons/tb"
import { NavLink } from 'react-router-dom'


const Button = ({ isUser, setIsUser }) => {
  return (
    <div className="sign-up-with">
      <div className='aspect-container'>
        <div className='lables' onClick={() => setIsUser(true)}
          style={{ backgroundColor: isUser ? " rgb(32, 140, 109)" : "white", color: isUser? "white":"rgb(32, 140, 109)"}}
        >
          <AiOutlineUser size={20} className={isUser ? "white" : "green"} />
          <p>User</p>
        </div>  
        <div className='lables' onClick={() => setIsUser(false)}
          style={{ backgroundColor: isUser ? "white" : " rgb(32, 140, 109)",  color: isUser? "rgb(32, 140, 109)":"white"}}>
          <TbStethoscope size={20} className={!isUser ? "white" : "green"} />
          <p>Provider</p>
        </div>
      </div>
      <p className='green sign-up-option-header'>Sign up with</p>
      <div className='btn-container'>
      <NavLink to="/sign-up/email">
        <div className='lables'>
          <MdEmail size={20} className='green'/>
          <p>Email</p>
        </div>
      </NavLink>

      <NavLink to="/sign-up/mobile">
      <div className='lables'>
        <FaMobileAlt size={20} className='green'/>
        <p>Mobile OTP</p>
      </div>
      </NavLink>

      <NavLink to="/sign-up/email">
      <div className='lables'>
        <FcGoogle size={20} className='green'/>
        <p>Google</p>
      </div>
      </NavLink>
      </div>
    </div>
  )
}

export default Button