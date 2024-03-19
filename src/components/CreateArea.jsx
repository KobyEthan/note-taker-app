import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState();

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    //prevents the default behavior which is to reload the page
    event.preventDefault();
  }

  function expandCreateArea(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="note-form">
          {isExpanded ? 
              <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              /> : null}
        <textarea
          name="content"
          onClick={expandCreateArea}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
