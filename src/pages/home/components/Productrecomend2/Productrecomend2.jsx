import React from "react";
import "./Productrecomend2.css";
import { BsHeart } from "react-icons/bs";
import StressReleiver from "../../../../Assets/Images/stressreliever.jpg";

function Productrecomend2() {
  return (
    <div className="product-2">
      <div className="product_image2">
        <img src={StressReleiver} alt="" />
      </div>
      <div className="product_info2">
        <h4 className="pink">everything you need for your meditation</h4>
        <h5 className="green">StressReleiver|Forever</h5>
        <h4>StressReliever</h4>
        <p className="product_price2">
          <strong>$</strong>
          <strong>123.00</strong>
        </p>
        <div className="product_rating2">
          <BsHeart />
        </div>
      </div>
      <button className="view-btn2">ViewYourGoal</button>
    </div>
  );
}

export default Productrecomend2;
