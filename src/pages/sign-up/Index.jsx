import React from 'react'
import "./Style.css"
import { Link, Outlet} from 'react-router-dom'
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
            <Link className='green' to="" id="oneline" >Already have an account? Login here</Link>
            <p className='green'>By signing up you agree to the Terms of Service</p>
            <p className='green'>and <Link to="" className='green'>Privacy Policy</Link> including <Link to="" href="" className='green'>Cookie use</Link> </p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Index