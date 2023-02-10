import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/Input/Input'
import "../Style.css"
const Index = () => {
    return (
          <div className="signup">
            <h3 className='green'>Forgot Password</h3>

            <div className='login-instruction'>
                <p className='green' style={{fontSize: 12}}>Enter your registered email address and we will send you a verification code to reset your password</p>
            </div>
            <Input lable="Email" span="*" name="email" />           

            <button className='green-btn'>Send OTP to reset your password</button>

            <Link  to="/sign-up" className='green' id="oneline" >New to SanjeevanStro^? Create an account here</Link>
        </div>
    )
}

export default Index