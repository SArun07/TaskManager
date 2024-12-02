import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const host = `${process.env.REACT_APP_BASE_URL}`
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

      // Get All Notes
      const getNotes = async ()=>{
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
      }

      // Add a Note
      const addNote = async (title, description, tag, status)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag, status}) 
        });
        const note = await response.json();
        setNotes(notes.concat(note))
        
      }

      // Delete a Note
      const deleteNote = async (id)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
        });
        const json =  response.json();
        console.log(json);
        const newNotes = notes.filter((note)=>{return note._id !== id})
        setNotes(newNotes)
      }

      // Edit a Note
      const editNote = async (id, title, description, tag, status)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag, status}) 
        });
        const json = await response.json();
        console.log(json);
        
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to Edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            newNotes[index].status = status;
            break;
          }
        }
        setNotes(newNotes);
      }

    return (
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;









// This below code for understanding context


// import NoteContext from "./noteContext";
// import React, { useState } from "react";

// const NoteState = (props) =>{
//     const s1 = {
//         "name": "Arun",
//         "class": "5b"
//     }
//     const [state, setState] = useState(s1)
//     const update = () =>{
//         setTimeout(() => {
//             setState({
//                 "name": "Prince",
//                 "class": "10b"
//             })
//         }, 1000);
//     }
//     return (
//         <NoteContext.Provider value = {{state, update}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }