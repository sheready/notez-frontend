import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';



const AddButton = () => {
  return (
        <Link to="/note/new">
            
            <Button id="Addbutton"><PlusCircleOutlined /></Button>

        </Link>
  )
}

export default AddButton