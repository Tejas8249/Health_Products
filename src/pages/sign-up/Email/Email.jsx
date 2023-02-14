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
console.log(data)
useEffect(() => {
    if(data) {<div className="03"></div>
        navigate("/")
    }
    //  dispatch(UserLoggedInAction(false))
},[data])

const [userInfo,setUserInfo] = useState(INITIAL_USER_Info);
const onUserEnterInput = ({ target : { name ,value}}) => {

}
    return (
        <div className="email-container">
           <Input lable="Email" span="*" name="email" value={userInfo.email} handler={onUserEnterInput}/>
           <Input lable="Date of Birth" span="*" placeholder='MM-DD-YY' name='dob' value={userInfo.dob} handler={onUserEnterInput} />
           <Input lable="Password" placeholder="Enter Password" instruction="password should be more then 8 charaters"/>
           <Input lable="Mobile" name='mobile' value={userInfo.mobile} handler={onUserEnterInput}/>          
            <button className='btn-green mt-2'
            onClick={() => dispatch(UserLoggedInAction(true))}
            >Get Started</button>
        </div>
    )
}

export default Email;