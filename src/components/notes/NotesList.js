import React from "react";
import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <div className="notesList section">
      {notes && notes.map((note) => <Note key={note.id} note={note} />)}
    </div>
  );
};

export default NotesList;
