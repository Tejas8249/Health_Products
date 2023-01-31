import React from 'react'
import "./Style.css"

const Email = () => {
    return (
        <div className="email-container">
            <div className='wrap'>
                <span className='green'>Email<sup>*</sup></span>
                <input type="text" />
            </div>
            <div className='wrap'>
                <span className='green'>Date of Birth<sup>*</sup> </span>
                <input type="number" placeholder='MM-DD-YY'/>
            </div>
            <div className='wrap'>
                <span className='green'>Password<sup>*</sup> </span>
                <input type="password" placeholder='Enter Password'/>
                <p>password should be more then 8 charaters</p>
            </div>
            <div className='wrap'>
                <span className='green'>Mobile</span>
                <input type="tel" maxLength={10}/>
            </div>
            <button className='btn-green mt-2'>Get Started</button>
        </div>
    )
}

export default Email