import React from "react";
import "./FormContainer.css";
import Form from "./Form/Form";

const FormContainer = ({ onAddNote }) => {
    const addNoteHandler = (note) => {
        onAddNote(note);
    };

    return (
        <div className="form-container">
          <Form onAddNoteHandler={addNoteHandler} />
        </div>
    );
};
  
  export default FormContainer;