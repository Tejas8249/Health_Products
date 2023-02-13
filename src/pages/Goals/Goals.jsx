import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
import './goals.css'
const Goals = () => {
    const [style, setStyle] = useState(false);
    const [style1, setStyle1] = useState(false);
    const [style2, setStyle2] = useState(false);
    const [style3, setStyle3] = useState(false);
   
    const [goal,setGoal] = useState(false);

    const aaa = style ? "text-bgcolor" : "green";
    const aaa1 = style1 ? "text-bgcolor" : "green";
    const aaa2 = style2 ? "text-bgcolor" : "green";
    const aaa3 = style3 ? "text-bgcolor" : "green";

    console.log(style);

    const handleStyle = () => {
        setStyle(prev=>!prev)       // (prev) => {return(!prev)}
        setStyle1(false)
        setStyle2(false)
        setStyle3(false)
    };
    const handleStyle1 = () => {
        setStyle1(prev=>!prev)
        setStyle2(false)
        setStyle3(false)
        setStyle(false)

    };
    const handleStyle2 = () => {
        setStyle2(prev=>!prev)
        setStyle3(false)
        setStyle1(false)
        setStyle(false)
    };
    const handleStyle3 = () => {
        setStyle3(prev=>!prev)
        setStyle2(false)
        setStyle1(false)
        setStyle(false)
    };

    const handleGoal = () => {
        setGoal(prev => !prev)
    }
    return (
        <>
            <div className="gol-container">
                <div className="stro-gol">
            <h2 className='green green2'> Welcome to Sanjeevan<span className='pink'>Stro</span>^</h2>

            <h3 className="green green2">How can we help you today?</h3>

            <h4 className="green green2">Pick your path and your Goal.</h4>
            </div>
            { goal ?

            <div className="text-container">

            <div onClick={handleStyle}>
                <h5 className={aaa} id="text">I would like to what wellness goals are available</h5>
            </div>

            <div onClick={handleStyle1}>
                <h5 className={aaa1} id="text">I want to a provider to find my the Goal</h5>
            </div>

            <div onClick={handleStyle2}>
                <h5 className={aaa2} id="text">I want to take an free Asseessement to find my Goal</h5>
            </div>

            <div onClick={handleStyle3}>
                <h5 className={aaa3} id="text">I want to see products that help me achive my Goals</h5>
            </div>

            </div> :  <div className="popup-div">
                <h3 className="popup-btn" onClick={handleGoal} >x</h3>
                <h4 className="goals">What are Goals</h4>
                <div className="h6-container">
                    <h6 className="first-text">Each Goal contains customized recommendation for your needs.</h6>
                </div>
                <div className="h6-container">
                <h6 className="sec-text">Our Goals may contains various suppliments and content guiding you to lern and understand more about your health and methods to attains desire Goals</h6>

                </div>
            </div>

            }

            <div>
                {/* <Link to="/goals/goalsdetails" className="nav-color">What are Goals?</Link> */}
                {goal && <button onClick={handleGoal}>What are Goals</button>}
            </div>
           {(style || style1 || style2 || style3) && <button className="goal-btn">Continue</button>}

            </div>  

            </>

    )
};
export default Goals;