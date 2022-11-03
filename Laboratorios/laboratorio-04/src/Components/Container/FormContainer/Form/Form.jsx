import React, { useState } from "react";
import "./Form.css";
import TextArea from "./TextArea/TextArea";
import CardButton from "../../CardContainer/Card/CardButton/CardButton";

const Form = ({ onAddNoteHandler }) => {
    const [note, setNote] = useState("");

    const onChangeDataHandler = (event) => {
        event.preventDefault();
        setNote(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAddNoteHandler(note);
        setNote("");
    };

    return (
        <form className="form">
          <TextArea onChange={onChangeDataHandler} note={note} />
          <CardButton text={"Add"} onClick={onSubmitHandler} />
        </form>
      );
};

export default Form;