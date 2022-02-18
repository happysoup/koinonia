import React from 'react';
import Note from './components/Note';
import './App.css';

const App = () => {
   return (
    <div className="App">
      <Note />
    </div>
  );
};

export default App;

 
/*
TODO: 
1. Create Note, Edit Note, Delete Note
1a. Note categorisation: 
2. Authentication - Link to specific pages and page categories
3. Admin Page for Page creation
4. Allow different users to add notes at the same time
5. Pagination
6. Reminders for date expiry
*/