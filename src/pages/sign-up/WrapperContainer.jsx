import React from 'react'
import "./Style.css"
import BackGround1 from "../../Assets/Images/user-img.png"
import BackGround2 from "../../Assets/Images/provider-img.png"
import { useSelector} from "react-redux"


const WrapperContainer = ({children}) => {
  let data= useSelector(state=>state.UserReducer)
  return (
    <div className="signup-container">
      <div className="mid-container">
        <div className="img"  style={{backgroundImage: data ? `url(${BackGround1})`:`url(${BackGround2})`}}>
        </div>
        {children}
      </div>
    </div>
  )
}  

export default WrapperContainer