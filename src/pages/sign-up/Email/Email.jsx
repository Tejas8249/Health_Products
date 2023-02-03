import React from 'react'
import "./Style.css"
import {useDispatch, useSelector} from "react-redux"
import { UserLoggedInAction } from '../../../redux/actionCreates/UserAction';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Email = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const data = useSelector(state=>state.UserLoggedIn)
useEffect(() => {
    if(data) {
        navigate("/home")
    }
},[data])
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
            <button className='btn-green mt-2'
            onClick={() => dispatch( UserLoggedInAction(true))}
            >Get Started</button>
        </div>
    )
}

export default Email