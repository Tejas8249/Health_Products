import React from 'react'
import { Link } from 'react-router-dom';


let arr = ["", "", "", "", "", ""];
const Index = () => {
  return (
    <div className='mobilenumberInput'>
      <p className='green'>Enter the OTP to sign in</p>

      <div className='enter-msg'> <p>Verification Code</p></div>
      <div>

        {
          arr.map(input => <input type="text" maxLength={1} className='otp' />)
        }
      </div>
      <Link to="" className='green'>Resend OTP</Link>
    </div>
  )
}

export default Index