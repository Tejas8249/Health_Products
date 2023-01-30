import React from 'react'
import "./Style.css"
import { Outlet,NavLink } from 'react-router-dom'
import BackGround1 from "../../Assets/Images/user-img.png"
import BackGround2 from "../../Assets/Images/provider-img.png"


const Index = ({isUser}) => {

  return (
    <div className="signup-container">
      <div className="mid-container">
        <div className="img"  style={{backgroundImage: isUser ? `url(${BackGround1})`:`url(${BackGround2})`}}>
         
        </div>
        <div className="signup">
          <h3 className='green'>Sign up to Sanjeevan<span className='pink'>Stro^</span></h3> 
<Outlet/>
          <div className="instruction">
            <NavLink className='green' id="oneline" >Already have an account? Login here</NavLink>
            <p className='green'>By signing up you agree to the Terms of Service</p>
            <p className='green'>and <NavLink className='green'>Privacy Policy</NavLink> including <NavLink href="" className='green'>Cookie use</NavLink> </p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Index