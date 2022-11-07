import React, { useState, useEffect } from "react";
import "./Container.css";
import FormContainer from "./FormContainer/FormContainer";
import CardContainer from "./CardContainer/CardContainer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ToastContainer from "./ToastContainer/ToastContainer";

const Container = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const addNote = (note) => {
        if (note.length < 1) {
            if (showAlert) {
                console.log("Alert already showing");
                return;
            }

            toast.error("Note cannot be empty!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                toastId: '001',
                onClose: setShowAlert(false),
            });
            return;
        }
        
        

        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const noteObj = {
            id: Date.now(),
            note,
        };

        notes.push(noteObj);
        localStorage.setItem("notes", JSON.stringify(notes));

        setNotes(notes);
    };

    const deleteNote = (id) => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const newNotes = notes.filter((note) => note.id !== id);

        localStorage.setItem("notes", JSON.stringify(newNotes));

        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== id);
        });
    };

    const editNote = (id, note) => {
        const notes = JSON.parse(localStorage.getItem("notes") || []);
        const noteIndex = notes.findIndex((note) => note.id === id);

        notes.splice(noteIndex, 1, { id, note });

        localStorage.setItem("notes", JSON.stringify(notes));
        setNotes(notes);
    };

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(notes);
    }, [note]);

    return (
        <div className="container">
          <FormContainer onAddNote={addNote} />
          <CardContainer onNotes={notes} onDelete={deleteNote} onEdit={editNote} />
          <ToastContainer />
        </div>
    );
};

export default Container;