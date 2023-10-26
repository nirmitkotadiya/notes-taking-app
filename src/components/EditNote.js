// EditNote.js - Edit Note component

import React, { useState } from 'react';

function EditNote({ initialContent, onSave, onCancel ,c_id}) {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    
    if (content.trim().length > 0) {
      onSave(content,c_id);
      setContent('');
      }   

  };

  return (
    <div className="note new">
      <textarea
       rows="8"
       cols="10"
        value={content}
        onChange={(e) => {
          if (200 - e.target.value.length >= 0) {
              setContent(e.target.value)
          }}}
  
  
      />
<div className="note-footer">
      <button onClick={handleSave} className='save'>Save</button>
      <button onClick={onCancel} className="save">Cancel</button>
      </div>
    </div>
  );
}

export default EditNote;
