const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for new notes
const NoteSchema = new Schema({
  noteText: {
    type: Object,
    required: [true, 'The text field is required'],
  },
  author: {
    type: String,
    // required: [true, 'The text field is required'],
  },
  createdOn: {
    type: Date,
    default: Date.now
}
});

// Create model for notes
const Note = mongoose.model('note', NoteSchema);

module.exports = Note;