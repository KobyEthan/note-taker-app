import React from "react";
import NoteIcon from '@mui/icons-material/Note';

function Header() {
  return (
    <header>
      <NoteIcon className="not-icon"/><h1> Note Taker</h1>
    </header>
  );
}

export default Header;
