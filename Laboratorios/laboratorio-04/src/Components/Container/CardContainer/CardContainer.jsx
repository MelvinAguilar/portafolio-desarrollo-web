import React from "react";
import "./CardContainer.css";
import Card from "./Card/Card";

const CardContainer = ({ onNotes, onDelete, onEdit }) => {
    return (
        <div className="card-container">
          {onNotes.map((note) => {
            return (
              <Card
                key={note.id}
                id={note.id}
                note={note.note}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })}
        </div>
    );
};

export default CardContainer;