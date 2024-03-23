import logo from "./logo.svg";
import NewApp from "./NewApp";
import { useState, useEffect } from "react";
import NavigateBar from "./Components/Navigate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab } from "@mui/material";


function App() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [prices, setPrices] = useState("");
  const [notes, setNotes] = useState([]);
  const [description, setDescription] = useState("");

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
    window.location.reload();
  }

    return (

        <div className="App" id="AppThis">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1>Pinoy & Thai Asian Cuisine</h1>
            {/* Search box and Add items */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "20px" }}>
                <p>Name</p>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                <p>Tag</p>
                <input
                  type="text"
                  id="tag"
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>
              <div style={{ marginRight: "20px" }}>
                <p>Price</p>
                <input
                  type='number'
                  id='prices'
                  onChange={(e) => setPrices(e.target.value)} 
                />
              </div>
              <Button variant="contained" onClick={submitNoteToNotion}>
                Submit to Notion
              </Button>
            </div>

            <div style={{ marginTop: "20px" }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Food Item</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notes.map((note) => (
                    <TableRow key={note.id}>
                      <TableCell>{note.name}</TableCell>
                      <TableCell>{note.tag}</TableCell>
                      <TableCell>${note.prices.toFixed(2)}</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Button variant="contained">Delete</Button>
                        </Stack> 
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
  
            {/* Other components */}
          </div>
        </div>
    );
  }
  
  function CustomizedInputBase() {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: 400 }}
      >
        <InputBase
          sx={{ ml: 'auto', flex: 1, textAlign: 'right' }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          
        </IconButton>
      </Paper>
    );
  }
  
  export default App;