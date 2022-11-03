import React from "react";
import "./TextArea.css";

const TextArea = ({ onChange, note }) => {
    return (
        <textarea
          className="textarea"
          rows="5"
          value={note}
          placeholder="Type to add a note here..."
          onChange={onChange}
        />
    );
};

export default TextArea;