import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
  note: noteReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
