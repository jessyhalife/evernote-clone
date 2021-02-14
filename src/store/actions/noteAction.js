export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("note added successfully");
      })
      .catch((err) => console.log(err));
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .delete()
      .then(() => {
        console.log("delete note successfully");
      })
      .catch((err) => console.log(err));
  };
};

export const toggleFavorite = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favStatus = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({ favorite: favStatus })
      .then(() => {
        console.log("favorited (or not) note successfully");
      })
      .catch((err) => console.log(err));
  };
};

export const editNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({ title: note.title, content: note.content })
      .then(() => {
        console.log("successfully updated note");
      })
      .catch((err) => console.log(err));
  };
};
