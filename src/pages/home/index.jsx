import React from "react";
import Subscription from "./components/subsciptions/Subscription";
import "./Style.css";
import { BsBell } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Upcomingorders from "./components/Upcomingorders/Upcomingorders";
import medicine from "../../Assets/Images/capsule.png";
import Productrecomend from "./components/ProductRecomend/Productrecomend";
import Productrecomend2 from "./components/Productrecomend2/Productrecomend2";
import Homefooter from "./components/HomeFooter/Homefooter";

const index = () => {
  return (
    <div className="home_container">
      <div className="invisible-div">
        <div className="home-header">
          <h2 className="green home-title">
            Hello <span className="pink">Sanjeevans,</span>
          </h2>
          <BsBell size={30} className="green" />
        </div>

        <div className="section-1">
          <div className="section-one">
            <div className="first-row">
              <h5 className="green">your active subscriptions</h5>
            </div>
            <div className="subscription-wrap">
              <Subscription />
              <Subscription />
            </div>
            <div className="view-div">
              <button className="viewDivBtn">
                View all{" "}
                <div>
                  <AiOutlineArrowRight size={12} />
                </div>
              </button>
            </div>
          </div>

          <div className="section-two">
            <div className="second-row">
              <h5 className="green">Upcoming Orders</h5>
            </div>
            <div className="order-wrap">
              <Upcomingorders />
            </div>
          </div>
        </div>
        <div>
          <h4 className="green product-title">Products Recommended For You </h4>
          <div className="home-row">
            <Productrecomend
              id="1234"
              title="Co Omega"
              price={74.00}
              rating={2}
              image={medicine}
            />
            <Productrecomend
              id="1235"
              title="Co Omega"
              price={74.00}
              rating={2}
              image={medicine}
            />
            <Productrecomend
              id="1236"
              title="Co Omega"
              price={74.00}
              rating={2}
              image={medicine}
            />
            <Productrecomend
              id="1237"
              title="Co Omega"
              price={74.00}
              rating={2}
              image={medicine}
            />
          </div>
        </div>
        <div className="view-div">
          <button className="viewDivBtn">
            View all{" "}
            <div>
              <AiOutlineArrowRight size={12} />
            </div>
          </button>
        </div>
        <h4 className="green product-title">Products Recommended For You </h4>
        <div className="home-row2">
          <Productrecomend2/>
          <Productrecomend2/>
          <Productrecomend2/>
        </div>
        <div className="view-div">
          <button className="viewDivBtn">
            View all{" "}
            <div>
              <AiOutlineArrowRight size={12} />
            </div>
          </button>
        </div>
        <div>
          <Homefooter/>
        </div>
      </div>
    </div>
  );
};

export default index;
