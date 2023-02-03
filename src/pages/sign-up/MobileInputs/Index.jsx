import React from 'react'
import "./Style.css"
import Inputs from "./Inputs/Index"
// import OTP from "./OTP/Index"


const Index = () => {
    return (
        <div className='mobile-container'>
    <Inputs/>
    {/* <OTP/> */}
        <button className='green-btn'>Get Started</button>
        </div>
    )
}

export default Index