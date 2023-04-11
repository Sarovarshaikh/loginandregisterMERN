import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const TodoList = (props) => {
   
  return (
    <>
    <div className='d-flex'>
        <Button color="error" onClick={()=>props.onSelect(props.id)} > <DeleteIcon/> </Button>
    <li> {props.txt} </li>
    </div>
    </>
  )
}

export default TodoList