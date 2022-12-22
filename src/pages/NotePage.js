import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
    //a usestate to handle the note state
    let [note, setNote] = useState("")
    // The useParams hook returns an object of key/value pairs of the dynamic params from 
    //the current URL that were matched by the <Route path>.
    let noteId = useParams().id

    useEffect(() => {
        getNote()
    }, [noteId])
    
    //get note function
    let getNote = async () => {
       let response = await fetch(`/api/notes/${noteId}`)
       let data = await response.json()
       setNote(data)
    }
   

  return (
    <div>
        {/* checks if we have a note body and passes it  */}
        <p>{note?.body}</p>

    </div>
  )
}

export default NotePage