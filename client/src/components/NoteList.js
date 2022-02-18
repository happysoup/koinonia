import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import draftToHtml from 'draftjs-to-html';



const NoteList = (props) => {

  var colors = ['#89c9d7', '#cd8ea6', '#f6a48d', '#fcf6b1', '#d3fcd5'];

  return (
    <div className="flex-container">
      {props.notes.map((note, index) => (
        <div className="card" key={index} onClick={() => props.deleteNote(note._id)} style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}> 
          <div className="author">by author</div>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(draftToHtml(note.noteText)) }} ></div>
          
          <div className="time-created">Posted 23 Mar 2022, 18:20 SGT</div>
          <div>
            <button className="submit-button" >edit</button>      
            <button className="submit-button" onClick={() => props.deleteNote(note._id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}


// onClick={() => deleteNote(note._id)}
export default NoteList;

