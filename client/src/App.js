import logo from "./logo.svg";
import "./App.css";
import NavigateBar from "./Components/Navigate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import MenuList from "./Components/MenuList";

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
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.log("Error fetching notes: ", error);
      });
  }

  function submitNoteToNotion() {
    console.log("Note has been sent");

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
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success! ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
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
