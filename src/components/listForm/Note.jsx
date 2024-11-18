import React, { useState, useEffect } from "react"
import "./note.css"

const Note = () => {
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
    setNotes(savedNotes)
  }, [])

  const removeNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index)
    setNotes(updatedNotes)
    localStorage.setItem("notes", JSON.stringify(updatedNotes))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!note.trim()) {
      return
    }

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
    savedNotes.push(note)
    localStorage.setItem("notes", JSON.stringify(savedNotes))

    setNotes([...notes, note])

    setNote("")
  }

  return (
    <div className="noteContainer">
      <h2>Notes:</h2>
      <form onSubmit={handleSubmit} className="inputForm">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note here..."
          rows="4"
        />
        <button type="submit">Save notes</button>
      </form>
      <ul className="noteList">
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => removeNote(index)} className="smallButton">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Note
