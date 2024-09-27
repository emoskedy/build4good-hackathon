import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import MenuList from "./Components/MenuList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes on component mount
  }, []);

  function fetchNotes() {
    fetch("http://localhost:4000/fetchNotesFromNotion")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.log("Error fetching notes: ", error);
      });
  }

  return (
    <div className="App" id="AppThis">
      <div>
        <Header title="Menu"></Header>
        <MenuList notes={notes} />
      </div>
    </div>
  );
}

export default App;
