import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import "./Style.css"


const Login = () => {
  return (
    <div className="signup">
      <h3 className='green'>Login to Sanjeevan<span className='pink'>Stro</span>^</h3>

      <Input lable="Email" span="*" name="email" />           
      <Input lable="Password" placeholder="Enter Password" instruction="password should be more then 8 charaters"/>
    
      <div className='f-password'>
        <Link to="" className='green'>Forgot password?</Link>
      </div>

            
      <button className='green-btn'>Countinue</button>
     
      <div className="instruction">
      <Link  to='/sign-up' className='green' id="oneline" >New to SanjeevanStro^? Create an account here</Link>
      <p className='green'>By signing up you agree to the Terms of Service</p>
      <p className='green'>and <Link to="" className='green'>Privacy Policy</Link> including <Link to="" className='green'>Cookie use</Link> </p>
    </div>
     
    </div>
    
  )
}

export default Login