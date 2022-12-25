import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CaretLeftOutlined } from '@ant-design/icons';
import { Input } from 'antd';
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

    let handleSubmit = () => {
      updateNote()
      navigate('/')
    }


  return (
    <div>

      <TextArea rows={4} onChange={(e) => setNote({...note, 'body': e.target.value})}/>
      <CaretLeftOutlined onClick={handleSubmit} />

   
  
      

    </div>
  )
}

export default NotePage