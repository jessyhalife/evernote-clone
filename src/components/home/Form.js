import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../../customHook/useInput";
import { addNote } from "../../store/actions/noteAction";

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    console.log({ title, content });
    resetContent();
    resetTitle();
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
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
            <label htmlFor="note_content">Note content</label>
          </div>
        </div>
        <button className="btn green">Save</button>
      </form>
    </div>
  );
};

export default Form;
