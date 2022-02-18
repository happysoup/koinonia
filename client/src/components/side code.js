// import React, { useState } from 'react';
// import axios from 'axios';
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
// import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

// function Input() {

//   const [value, setValue] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );

//   const addNote = () => {
//     var noteText = editorState.getCurrentContent();
//     if (noteText.hasText() && noteText.getPlainText().length > 0) {
//       const newNote = {
//         // id,
//         noteText: convertToRaw(noteText),
//         // description,
//       };
//       axios
//         .post('/api/notes', newNote)
//         .then((res) => {
//           if (res.data) {
//             setEditorState(EditorState.createEmpty());
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//     else {
//       console.log('Please enter something');
//     }

//   };

//   return (
//     <div>
//       <form>
//         <Editor
//           editorState={editorState}
//           onEditorStateChange={setEditorState}
//           editorClassName="editor-class"
//           wrapperClassName="wrapper-class"
//           editorStyle={{ fontSize: 16 }}
//           toolbar={{
//             inline: { inDropdown: true },
//             list: { inDropdown: true },
//             textAlign: { inDropdown: true },
//             link: { inDropdown: true },
//             emojis: { inDropdown: true },
//           }}
//         />
//         <label>
//           Pick your favorite flavor:
//           <select value={value}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>

//         <label>
//           <p>Expiry</p>
//           <DatePicker selected={date} onChange={date => setDate(date)} />
//         </label>

//         <button className="button-submit" onClick={addNote}>add note</button>
//       </form>
//     </div>
//   );
// }

// export default Input;