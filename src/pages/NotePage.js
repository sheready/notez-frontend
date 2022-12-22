import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";



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

    const card = (

        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            </Typography>
            <Typography variant="body2">
                {/* checks if we have a note body and passes it  */}
                {note?.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
                <Link to={`/`}>
                    <ArrowBackIosNewIcon />
                </Link>
                </Button>
                
            
          </CardActions>
        </React.Fragment>
        );

 
    

   

  return (
    <div>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      

    </div>
  )
}

export default NotePage