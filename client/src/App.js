import logo from "./logo.svg";
import "./App.css";
import NavigateBar from "./Components/Navigate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [prices, setPrices] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(); // Fetch notes on component mount
  }, []);

  function fetchNotes() {
    fetch("http://localhost:4000/fetchNotesFromNotion")
      .then(response => response.json())
      .then(data => {
        setNotes(data);
      })
      .catch((error) => {
        console.log('Error fetching notes: ', error);
      });
  }

  function submitNoteToNotion() {
    console.log('Note has been sent');
    
    fetch("http://localhost:4000/submitNoteToNotion", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        tag: tag,
        prices: parseFloat(prices) || 0,
      })
    }).then(response => response.json())
    .then(data => {
      console.log('Success! ', data);
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }
  
  return (
    <Router>
      <NavigateBar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </NavigateBar>

      <div className="App" id="AppThis">
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h1>Notion Notes</h1>
          {notes.map(note => (
            <div key={note.id}>
              <h3>{note.name}</h3>
              <p>Tags: {note.tag.join(', ')}</p>
              <p>Price: ${note.prices}</p>
            </div>
          ))}
          
          <h1>testing! put your information down below!</h1>
          <p>Name</p>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <p>Tag</p>
          <input
            type="text"
            id="tag"
            onChange={(e) => setTag(e.target.value)}
          />

          <p>Price</p>
          <input type='number' id='prices' onChange={(e) => setPrices(e.target.value)} />

          <div>
            <button onClick={submitNoteToNotion}>Submit to Notion</button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
