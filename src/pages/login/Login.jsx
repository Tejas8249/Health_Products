import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"


const Login = () => {
  return (
    
    <div className="signup">
      <h3 className='green'>Login to Sanjeevan<span className='pink'>Stro</span>^</h3>

      <div className='wrapp'>
        <span className='green'>Email<sup>*</sup></span>
        <input type="text" />
      </div>

      <div className='wrapp'>   
        <span className='green'>Password<sup>*</sup> </span>
        <input type="password" />
      </div>

      <div className='f-password'>
        <Link to="" className='green'>Forgot password?</Link>
      </div>

      {/* <span>The email address or password is not correct</span> */}
      
      <button className='green-btn'>Countinue</button>
     
      <div className="instruction">
      <Link  to="" className='green' id="oneline" >New to SanjeevanStro^? Create an account here</Link>
      <p className='green'>By signing up you agree to the Terms of Service</p>
      <p className='green'>and <Link to="" className='green'>Privacy Policy</Link> including <Link to="" className='green'>Cookie use</Link> </p>
    </div>
     
    </div>
    
  )
}

export default Login