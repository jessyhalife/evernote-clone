import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import moment from "moment";

const NoteDetail = (props) => {
  const id = props.match.params.id;
  useFirestoreConnect([{ collection: "notes", doc: id }]);
  const note = useSelector(
    ({ firestore: { data } }) => data.notes && data.notes[id]
  );
  const noteMarkup = !isLoaded(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            <h5>Loading..</h5>
          </span>
          <div className="card-action grey lighten-4 grey-text"></div>
        </div>
      </div>
    </div>
  ) : isEmpty(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            <h5>Not found</h5>
          </span>
          <div className="card-action grey lighten-4 grey-text"></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            <h5>{note?.title}</h5>
            <p>{note?.content}</p>
          </span>
          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(note?.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return noteMarkup ;
};

export default NoteDetail;
