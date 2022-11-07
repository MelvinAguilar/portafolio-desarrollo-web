import React from "react";
import "./CardTextArea.css";

const CardTextArea = ({ note, isEditing, onChange }) => {
    return (
        <textarea
          className="edit-input"
          type="text"
          value={note}
          readOnly={!isEditing}
          onChange={onChange}
        />
    );
};

export default CardTextArea;