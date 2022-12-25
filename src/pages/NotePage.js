import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'




const NotePage = () => {
    //a usestate to handle the note state
    let [note, setNote] = useState("")
    // The useParams hook returns an object of key/value pairs of the dynamic params from 
    //the current URL that were matched by the <Route path>.
    let noteId = useParams().id
    let navigate = useNavigate();

    useEffect(() => {
        getNote()
    }, [noteId])

    //get note function
    let getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async() => {
      fetch(`/api/notes/${noteId}/update`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }

    let handleSubmit = () => {
      updateNote()
      navigate('/')
    }

  return (
    <div>
      <div>
        <textarea onChange={(e) => setNote({...note, 'body': e.target.value})}/>
        <h3>
          <button onClick={handleSubmit}>Home</button>
        </h3>
      </div>
  
      

    </div>
  )
}

export default NotePage