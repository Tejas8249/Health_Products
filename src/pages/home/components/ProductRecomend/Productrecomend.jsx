import React from "react";
import "./Productrecomend.css";
import { BsHeart } from "react-icons/bs";
// import { useStateValue } from '../../../../ContextApi/Provider';

function Productrecomend({ id, title, image, price, rating }) {
  // const [state,dispatch] = useStateValue();
  return (
    <div className="product">
      <div className="product_image">
        <img src={image} />
      </div>
      <div className="product_info">
        <h5 className="green">Co Omega|heir</h5>
        <h4>{title}</h4>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <BsHeart />
        </div>
      </div>
      <button className="view-btn">View</button>
    </div>
  );
}

export default Productrecomend;
