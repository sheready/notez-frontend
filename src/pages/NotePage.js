import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';



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
      fetch(`/api/notes/${noteId}/update/`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }

    let handleSubmit = () =>{
      updateNote()
      navigate('/')
    }

    const card = (

        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"> 
            </Typography>
            <Typography variant="body2">
                {note?.body}
            </Typography>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder={note?.body}
              style={{ width: 200 }}
              onChange = {(e) => {setNote({...note, 'body':e.target.value})}}
            />
          </CardContent>
          <CardActions>
            <Button size="small"> 
              <ArrowBackIosNewIcon  onClick={handleSubmit}/>
            </Button>
                
            
          </CardActions>
        </React.Fragment>
        );

  return (
    <div>
        <Box sx={{ minWidth: 275 }} id="itemcard" className='notes-list'>
          <Card variant="outlined">{card}</Card>

        </Box>
  
      

    </div>
  )
}

export default NotePage