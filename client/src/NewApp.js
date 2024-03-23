import logo from "./logo.svg";
import "./App.css";
import NewApp from "./NewApp";
import { useState } from "react";
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
    const [description, setDescription] = useState("");
  
    function submitNoteToNotion() {
      console.log("Successsss");
      fetch("http://localhost:4000/submitNoteToNotion", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          tag: tag,
          description: description,
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
  
    // Sample data for the menu table
    const rows = [
      { id: 1, foodItem: "Food Item 1", category: "Category 1", price: "$10", quantityLeft: 10 },
      // Add more rows as needed
    ];
  
    return (
      <Router>
        <NavigateBar>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={<NewApp />} />
            <Route path="/" element={<App />} />
          </Routes>
        </NavigateBar>

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
                <p>Description for note?</p>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  cols={25}
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
                      <TableCell colSpan={5}>
                        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                          <Button variant="contained">Add Food Item</Button>
                          <CustomizedInputBase />
                        </Stack>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Food Item</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity Left</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.foodItem}</TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.quantityLeft}</TableCell>
                        <TableCell>
                            <Stack direction="row" spacing={1}>
                                <Button variant="contained">Edit</Button>
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
      </Router>
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