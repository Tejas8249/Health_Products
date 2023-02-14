import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={props.imgSrc} alt={props.imgAlt} />
                <p className="title">
                    {props.title}{" "}
                    <span className="bookmark">
                        <a href="">{props.icon}</a>
                    </span>
                </p>
                <div className="icon">
                    <p>{props.description}</p>
                </div>

                <div className="descp">
                    <span className="goal">4 items</span>
                    <a className="goal" href="#">
                        View Goal <i> &rarr;</i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;