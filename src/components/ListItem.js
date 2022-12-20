import React from 'react'

// pass notes as a prop
const ListItem = ({ note }) => {
  return (
    <div>
        {/* display notes body */}
        <h3>{note.body}</h3>
    </div>
  )
}

export default ListItem