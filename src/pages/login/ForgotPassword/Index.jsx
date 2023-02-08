import React from 'react'
import { Link } from 'react-router-dom'
import "../Style.css"
const Index = () => {
    return (
          <div className="signup">
            <h3 className='green'>Forgot Password</h3>

            <div className='login-instruction'>
                <p className='green' style={{fontSize: 12}}>Enter your registered email address and we will send you a verification code to reset your password</p>
            </div>

            <div className='wrapp'>
        <span className='green'>Email</span>
        <input type="text" />
      </div>

            <button className='green-btn'>Send OTP to reset your password</button>

            <Link  to="" className='green' id="oneline" >New to SanjeevanStro^? Create an account here</Link>
        </div>
    )
}

export default Index