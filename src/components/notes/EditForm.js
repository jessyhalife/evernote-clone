import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../store/actions/noteAction";
import useInput from "../../customHook/useInput";
import { useHistory } from "react-router-dom";

const EditForm = (props) => {
  const note = useSelector((state) => state.note);
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);
  const dispatch = useDispatch();
  const history = useHistory();
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editNote({ id: note.id, title, content }));
    resetTitle();
    resetContent();
    history.push("/")
  };
  if (!note || !note.id) {
      history.goBack();
  }
  return (
    <div className="section">
      <form onSubmit={editHandler} className="white">
        <h5 className="grey-text text-darken-3">Edit Note</h5>
        <div className="input-field">
          <input
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note_title">
            Note Title
          </label>
          <div className="input-field">
            <textarea
              id="note_content"
              className="materialize-textarea"
              {...bindContent}
            ></textarea>
            <label className="active" htmlFor="note_content">Note content</label>
          </div>
        </div>
        <button className="btn green">Save</button>
      </form>
    </div>
  );
};

export default EditForm;
