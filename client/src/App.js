import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  function submitNoteToNotion() {
    console.log('Sucesssss');
    fetch("http://localhost:4000/submitNoteToNotion", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        tag: tag,
        description: description
      })
    }).then(response => response.json())
    .then(data => {
      console.log('Success! ', data);
    }).catch((error) => {
      console.log('Error: ', error)
    });
  }

  return (
    <div className="App">
      <div style={{maxWidth: "500px", margin: "0 auto"}}>
        <h1>testing! put your information down below!</h1>
        <p>Name</p>
        <input type='text' id='name' onChange={(e) => setName(e.target.value)} />

        <p>Tag</p>
        <input type='text' id='tag' onChange={(e) => setTag(e.target.value)} />

        <p>Description for note?</p>
        <textarea onChange={(e) => setDescription(e.target.value)} rows={10} cols={25} />

        <div>
          <button onClick={submitNoteToNotion}>Submit to Notion</button>
        </div>
      </div>
    </div>
  );
}

export default App;
