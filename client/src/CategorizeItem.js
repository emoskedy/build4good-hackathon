import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import "./App.css";

const CategorizeItem = ({ tags }) => {
  // Assuming `tags` is an array of tags you want to filter notes by
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes on component mount
  }, [tags]);

  function fetchNotes() {
    fetch("http://localhost:4000/fetchNotesFromNotion")
      .then((response) => response.json())
      .then((data) => {
        // Filter the notes based on the tag
        const filteredNotes = data.filter((note) =>
          note.tag.some((tag) => tags.includes(tag))
        );
        setNotes(filteredNotes);
      })
      .catch((error) => {
        console.log("Error fetching notes: ", error);
      });
  }

  // Render logic remains the same
  return (
    <div className="App" id="AppThis">
      <div>
        <Header title="Menu" />
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
      </div>
    </div>
  );
};

export default CategorizeItem;
