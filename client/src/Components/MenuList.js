import React from "react";

// Assuming 'notes' is an array of objects passed as a prop
function MenuDisplay({ notes }) {
  return (
    <div id="menuDiv">
      {notes.map((note) => (
        <div className="menuItem" key={note.id}>
          <h3>{note.name}</h3>
          <hr />
          <p>Tags: {note.tag.join(", ")}</p>
          <p>Price: ${note.prices}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuDisplay;
