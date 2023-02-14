import React from "react";
import Card from "./cards/Card";
import "./Style.css";

const GoalsCrdList = ({ cardsData }) => {
    return (
        <div className="card-container">
            {cardsData.map((cardData, index) => (
                <Card
                    key={index}
                    imgSrc={cardData.imgSrc}
                    imgAlt={cardData.imgAlt}
                    title={cardData.title}
                    // title={cardData.title + " " + (index + 1)}
                    icon={cardData.icon}
                    description={cardData.description}
                />
            ))}
        </div>
    );
};

export default GoalsCrdList;
