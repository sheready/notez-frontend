import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons';
import { Input, Button, Space } from 'antd';
const { TextArea } = Input;

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

    let deleteNote = async() => {
      fetch(`/api/notes/${noteId}/delete`, {
        method : 'DELETE',
        'headers': {
          'Content-Type': 'application/json'
        },
      })
      navigate('/')
    }

    let handleSubmit = () => {
      updateNote()
      navigate('/')
    }


  return (
    <div id="items">
      <LeftOutlined className= "itemicon" onClick={handleSubmit} />
      <Button id="deleteButton" danger onClick={deleteNote}>Delete</Button>
      <p id="note-body">{note?.body}</p>
      <TextArea className= "itemcard" placeholder={note?.body} rows={4} onChange={(e) => setNote({...note, 'body': e.target.value})}/>
   
    </div>
  )
}

export default NotePage