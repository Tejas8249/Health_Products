import React from "react";
import './HomeFooter.css';
import { GiConfirmed } from "react-icons/gi";
function Homefooter() {
  return(
    <div className="home-footer">
      <div className="footer-para">
        <h4>Not Sure Where To Start?<br />
          Take A Free Assesment Test to find out...
        </h4>
      </div>
      <div className="footer-btn">
     
        <button className="btn-assesment"> <GiConfirmed size={20}/>Take Assesment</button>
      </div>
    </div>
  )
}
export default Homefooter;