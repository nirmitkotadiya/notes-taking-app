import { useEffect,useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';


function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("lists")) 
  );


  const [searchText, setSerchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editNote , setEditNote ] = useState("null");
  
  const handleEditClick = (id) => {
    setEditNote(id);
  };
  
  useEffect(() => {
    localStorage.setItem("lists",
      JSON.stringify(notes))
  }, [notes]);

  const handleSaveClick = (editedContent,c_id) => {
    const updatedNotes = [...notes];
   const index =  updatedNotes.findIndex((i)=>i.id === c_id)
   updatedNotes[index].text = editedContent
   setNotes(updatedNotes)
    setEditNote(null)
  };
 
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)

  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);

  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSerchText} />
        <NotesList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditClick={handleEditClick}
          editNote = {editNote}
          handleSaveClick={handleSaveClick} 
          />
      </div>
    </div>)
}
export default App;
