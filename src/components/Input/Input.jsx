import React from 'react'
import "./Style.css"

const Input = ({lable, span, type="text", placeholder,name, value, handler, error, instruction }) => {
  return (
    <div className='wrap'>
        {lable && <label className='green'>{lable} <span>{span}</span> </label>}
        <input type={type} name={name} value={value} onChange={handler} placeholder={placeholder}/>
        {instruction && <p>{instruction}</p>}
        {error && <p style={{color: "red" }}>{error}</p>}
      </div>
  ) 
}

export default Input