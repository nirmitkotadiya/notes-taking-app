import Note from './Note.js'
import AddNote from './AddNote.js'
import EditNote from './EditNote.js'

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditClick, editNote, handleSaveClick }) => {

  return (<div className="notes-list">
    {notes.map((note) =>
      <div key={note.id}>
        {editNote === note.id ? (
          <>
            <EditNote
              initialContent={note.text}
              onSave={handleSaveClick}
              c_id={note.id}
              onCancel={() => handleEditClick(null)
              }
            />
          </>
        ) : (
          <>
            <Note
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
              handleEditClick={handleEditClick}
            />
          </>
        )}
      </div>
    )
    }
    <AddNote handleAddNote={handleAddNote} />

  </div>)
}

export default NotesList;