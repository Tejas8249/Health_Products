import React from 'react'

import "./Style.css"
import { Outlet,Link } from 'react-router-dom'

const MidContainer = () => {
  return (
    <div className="signup">
    <h3 className='green'>Sign up to Sanjeevan<span className='pink'>Stro^</span></h3> 
<Outlet/>
    <div className="instruction">
      <Link  to="" className='green' id="oneline" >Already have an account? Login here</Link>
      <p className='green'>By signing up you agree to the Terms of Service</p>
      <p className='green'>and <Link to="" className='green'>Privacy Policy</Link> including <Link to="" className='green'>Cookie use</Link> </p>
    </div>
  </div>
  )  
}

export default MidContainer