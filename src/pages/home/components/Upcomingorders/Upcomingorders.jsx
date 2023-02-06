import React from "react";
import "./Upcomingorders.css";
import { GiConfirmed } from "react-icons/gi";

const Upcomingorders = () => {
  return (
    <div className="order-track">
      <div className="ot-section1">
        <div>
          <h5>Order Number</h5>
          <label htmlFor=""> 845321</label>
        </div>

        <div>
          <h5>Order Status</h5>
          <label htmlFor="">
            Confirm <GiConfirmed />
          </label>
        </div>
      </div>

      <fieldset />
      <div className="ot-section2">
        <h5>Estimated delivery - 21st Mar 2023</h5>
        <div className="order-btn">
            <button className="viewDivBtn2">Order Details</button>
            <button className="viewDivBtn2">Track</button>
        </div>

      </div>
    </div>
  );
};

export default Upcomingorders;
