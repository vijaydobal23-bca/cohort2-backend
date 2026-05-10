import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios
      .get("/api/notes")
      .then((res) => {
        setNotes(res.data.notes || []);
      })
      .catch((err) => {
        console.error("Failed to fetch notes:", err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, discription } = e.target.elements;

    console.log(title.value, discription.value);
    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        discription: discription.value,
      })
      .then((res) => {
        console.log("Data submitted sucessfully");
        fetchNotes();
      })
      .catch((error) => {
        console.log("Failed");
      });
  }

  function handleDeleteNotes(noteId){
    console.log(noteId);
    axios.delete(`http://localhost:3000/api/notes/${noteId}`).then((res)=>{
      console.log(res.data);
      fetchNotes();
    })
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <form className="note-create-form" onSubmit={(e) => handleSubmit(e)}>
        <input name="title" type="text" placeholder="Enter title"></input>
        <input
          name="discription"
          type="text"
          placeholder="Enter your discription "
        ></input>
        <button>Create note</button>
      </form>

      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <p>{note.discription}</p>
              <button onClick={()=> handleDeleteNotes(note._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
