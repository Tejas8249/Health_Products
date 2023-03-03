import React from 'react'
import "./Style.css"
const PageNotFound = () => {
  return (
    <div className='PageNotFound-container'>
       <h3> PageNotFound🎃</h3>

       <h3> {URL=window.location.href.slice(21) }</h3>
    </div>
  )
}

export default PageNotFound