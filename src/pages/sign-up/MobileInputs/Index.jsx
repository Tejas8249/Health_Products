import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"

const Index = () => {
    return (
        <div className='mobile-container'>

            <div className='mobilenumberInput'> 
                <p className='green'>Enter a Valid mobile number and we will <br /> send you a OTP to sign up.</p>

                <div className='wrap'>
                    <span className='green'>Mobile</span>
                    <input type="tel" />
                </div>
            </div>

            {/* <div className='mobilenumberInput'>
                 <p className='green'>Enter the OTP to sign in</p>
                 <div>
                   <input type="text" maxLength={1} className='otp'/>
                   <input type="text" maxLength={1} className='otp'/>
                   <input type="text" maxLength={1} className='otp'/>
                   <input type="text" maxLength={1} className='otp'/>
                   <input type="text" maxLength={1} className='otp'/>
                   <input type="text" maxLength={1} className='otp'/>
                 </div>
                 <Link to="" className='green'>Resend OTP</Link>
            </div>

            <button className='btn-green'>Get Started</button> */}

        </div>
    )
}

export default Index