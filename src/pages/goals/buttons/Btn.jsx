import React from "react";
const Button = (props) => {
    return (
        <div className="main">
            <button>{props.value}</button>
        </div>
    );
};

export default Button;
