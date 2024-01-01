import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateNotes from './pages/createnotes/CreateNotes';
import EditNotes from './pages/editnotes/EditNotes';
import Notes from './pages/notes/Notes';
// import dummynotes from './dummy_notes'
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])
  return (
    <main id="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Notes notes={notes} />} />
          <Route exact path='/create-notes' element={<CreateNotes setNotes={setNotes} />} />
          <Route exact path='/edit-notes/:id' element={<EditNotes notes={notes} setNotes={setNotes} />} />
        </Routes>
      </Router>      
    </main>
  );
}

export default App;
