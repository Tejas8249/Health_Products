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
      <div className='lables'>
        <div className='lables' onClick={() => setIsUser(true)}
          style={{ backgroundColor: isUser ? " rgb(32, 140, 109)" : "white", color: isUser? "white":"black"}}
        >
          <AiOutlineUser className={isUser ? "white" : "green"} />
          <p>User</p>
        </div>  
        <div className='lables' onClick={() => setIsUser(false)}
          style={{ backgroundColor: isUser ? "white" : " rgb(32, 140, 109)",  color: isUser? "black":"white"}}>
          <TbStethoscope className={!isUser ? "white" : "green"} />
          <p>Provider</p>
        </div>
      </div>
      <p className='green'>Sign up with</p>
      <NavLink to="/sign-up/email">
        <div className='lables'>
          <MdEmail className='green'/>
          <p>Email</p>
        </div>
      </NavLink>

      <NavLink to="/sign-up/mobile">
      <div className='lables'>
        <FaMobileAlt className='green'/>
        <p>Mobile OTP</p>
      </div>
      </NavLink>

      <NavLink to="/sign-up/email">
      <div className='lables'>
        <FcGoogle className='green'/>
        <p>Google</p>
      </div>
      </NavLink>
    </div>
  )
}

export default Button