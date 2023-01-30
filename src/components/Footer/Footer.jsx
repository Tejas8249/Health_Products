import React from 'react'
import "./Style.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footerHeader'><h3 className='white'>Sanjeevan<span className='pink'>Stro</span>^</h3></div>

            <div className='footerCopyrights'><p className='white'>© 2022 SanjeevanStro^ All rights reservered</p></div>

            <div className='footer-list white'>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
        </div>
    )
}

export default Footer