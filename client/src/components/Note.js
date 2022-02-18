import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import NoteList from './NoteList';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Note() {
  const [notes, setNotes] = useState([]);
  
  const getNotes = () => {
    axios
      .get('/api/notes')
      .then((res) => {
        if (res.data) {
          setNotes(res.data)
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    axios
      .delete(`/api/notes/${id}`)
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getNotes();
  }, [notes]);



  //  const editNote = (id) => {
  // axios
  //   .put(`/api/notes/${id}`, note)
  //   .then((res) => {
  //     if (res.data) {
  //       setNote(note);
  //     }
  //   })
  // .catch((err) => console.log(err));
  // console.log("update");


  return (
    <div>
      <h1>My Note(s)</h1>
      <Input getNotes={getNotes} />
      
      {notes && notes.length > 0 ? (
        <NoteList notes={notes} deleteNote={deleteNote} />
      ) : (
        <h2>No note(s) left</h2>
      )}
    </div>
  );

}

export default Note;

