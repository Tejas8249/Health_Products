import React, { useState , useEffect } from 'react'
import "./Style.css"
import {useDispatch, useSelector} from "react-redux"
import { UserLoggedInAction } from '../../../redux/actionCreates/UserLoggedInAction';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';

const INITIAL_USER_Info ={
    email: "",
    dob: "",
    password: "",
    mobile: ""
}

const Email = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const data = useSelector(state=>state.UserLoggedIn)
useEffect(() => {
    if(data) {<div className="03"></div>
        navigate("/home")
    }
},[data])

const [userInfo,setUserInfo] = useState(INITIAL_USER_Info);
const onUserEnterInput = ({ target : { name ,value}}) => {

}
    return (
        <div className="email-container">
            <Input lable="Email" span="*" name="email"           
            />
            {/* <div className='wrap'>
                <span className='green' >Email<sup>*</sup></span>
                <input type="text" name='email' value={userInfo.email} handler={onUserEnterInput}/>
            </div> */}
            <div className='wrap'>
                <span className='green'>Date of Birth<sup>*</sup> </span>
                <input type="number" placeholder='MM-DD-YY' name='dob' value={userInfo.dob} handler={onUserEnterInput}/>
            </div>
            <div className='wrap'>
                <span className='green'>Password<sup>*</sup> </span>
                <input type="password" placeholder='Enter Password' name='password' value={userInfo.password} handler={onUserEnterInput}/>
                <p>password should be more then 8 charaters</p>
            </div>
            <div className='wrap'>
                <span className='green'>Mobile</span>
                <input type="tel" maxLength={10} name='mobile' value={userInfo.mobile} handler={onUserEnterInput}/>
            </div>
            <button className='btn-green mt-2'
            onClick={() => dispatch( UserLoggedInAction(true))}
            >Get Started</button>
        </div>
    )
}

export default Email;