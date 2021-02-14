import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFavorite } from "../../store/actions/noteAction";
import { Link } from "react-router-dom";
const Note = ({ note }) => {
  const dispatch = useDispatch();

  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };

  const editNoteHandler = () => {
    dispatch({ type: "EDIT_NOTE", payload: note });
  };
  const toggleFavNoteHandler = () => {
    dispatch(toggleFavorite(note));
  };

  return (
    <div className="note white">
      <div className="right-align">
        <i
          className={`material-icons red-text`}
          style={{ cursor: "pointer" }}
          onClick={toggleFavNoteHandler}
        >
          {note.favorite ? "favorite" : "favorite_border"}
        </i>
        <i
          onClick={deleteNoteHandler}
          className="material-icons"
          style={{ cursor: "pointer" }}
        >
          delete
        </i>
      </div>
      <Link to={`/note/${note.id}`}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <small className="grey-text">
        {moment(note.createdAt.toDate()).fromNow()}
      </small>

      <div className="right-align">
        <Link to={`/note/${note.id}/edit`}>
          <i className="material-icons black-text" onClick={editNoteHandler}>
            edit
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Note;
