import React from 'react'
import { Link } from 'react-router-dom'

// pass notes as a prop
const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/note/${note.id}`}>
        {/* display notes body */}
        <h3>{note.body}</h3>
      </Link>
        
    </div>
  )
}

export default ListItem