import { MdDeleteForever } from 'react-icons/md'

const Note = ({id,text,date,handleDeleteNote,handleEditClick}) =>{
    return(
        <div className="note">
            <span>{text}</span>
             <div className="note-footer">
                <small>{date}</small>
                <button className='save' onClick={()=>handleEditClick(id)}>edit</button>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)}
                 className='"delete-icon' size="1.3em"/>
            </div>


        </div>
    );
};

export default Note;