import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



// pass notes as a prop
const ListItem = ({ note }) => {
  
const card = (

  <React.Fragment>
    <CardContent >
      <Typography variant="body2">
        {note.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
      <Link to={`/note/${note.id}`}>
        {/* display notes body */}
        <h3>See more</h3>
        
      </Link>
      </Button>
    </CardActions>
  </React.Fragment>
  );

  return (
    <div>
        <Box id="itemcard">
          <Card variant="outlined">{card}</Card>
        </Box>
       
        
    </div>
  )
}

export default ListItem