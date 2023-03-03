import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaMobileAlt } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineUser } from "react-icons/ai"
import { TbStethoscope } from "react-icons/tb"
import { NavLink,Link } from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux"
import { UserAction } from '../../redux/actionCreates/UserAction'

const Button = () => {

let dispatch=useDispatch();
let data= useSelector(state=>state.UserPerspective)
 console.log(data)


  return (
    <div className="sign-up-with">
      <div className='aspect-container'>
        <div className='lables'onClick={()=>dispatch(UserAction(true))} 
                  style={{ backgroundColor: data ? " rgb(32, 140, 109)" : "white", color: data? "white":"rgb(32, 140, 109)"}}
        >
          <AiOutlineUser size={20} className={data ? "white" : "green"} />
          <p>User</p>
        </div>  
        <div className='lables' onClick={() => dispatch(UserAction(false))}
          style={{ backgroundColor: data ? "white" : " rgb(32, 140, 109)",  color: data? "rgb(32, 140, 109)":"white"}}>
          <TbStethoscope size={20} className={!data ? "white" : "green"} />
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

      <Link to="/sign-up/mobile">
      <div className='lables'>
        <FaMobileAlt size={20} className='green'/>
        <p>Mobile OTP</p>
      </div>
      </Link>

      <NavLink to="/http/www.google.com">
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