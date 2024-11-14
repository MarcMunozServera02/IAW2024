import React, { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';
import { nanoid } from 'nanoid'

function App() {
  
  // here we are adding three dummy notes in our useState hooks for notes
  const inicialNotesList = [
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "03/11/2021"
    },
  ];

  const [notes, setNotes] = useState(inicialNotesList);

  // this are the states for searching text and toggle mode
  const [searchNote, setSearchNote] = useState('');
  const [darkMode, setDarkMode] = useState(false)

  // to store or save the data in local storage even after closing the tab
  // Only exec one time in load component
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  // This is for saving the app data in local storage
  // exec every time "notes" variable changes
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  // This function is for adding new note 
  function addNote(text) {
    setNotes([...notes,
     {      
      id: nanoid(),
      text: text,
      date: new Date.toLocaleDateString()
    }])
  }

  // This function is for deleting notes in note app with a id
  function deletingNote(id){
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className={darkMode && 'dark-mode'}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchNote} />
        <NotesList  notes={notes.filter((note) => note.text.includes(searchNote))} 
                    handleAddNote={addNote} 
                    handleDelete={deletingNote} />
      </div>
    </div>
  )
}

export default App
