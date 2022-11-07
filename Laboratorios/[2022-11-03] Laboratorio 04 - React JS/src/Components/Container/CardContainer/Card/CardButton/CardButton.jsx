import React from "react";
import "./CardButton.css";

const CardButton = ({ text, onClick }) => {
    return (
        <button className="card-btn" onClick={onClick}>
          {text}
        </button>
    );
};

export default CardButton;