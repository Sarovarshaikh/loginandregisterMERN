import React, { useState } from 'react'
import TodoList from './TodoList'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Button from '@mui/material/Button';

const Form = () => {
    const [inputList,setInputList] =useState("")
    const [items, setItems]=useState([])
    const itemEvent=(e)=>{
        setInputList(e.target.value)
    }
const handleOftodoList=()=>{
    setItems((oldItems)=>{
        return[...oldItems,inputList]
    })
    setInputList("")
}
const deleteItems=(id)=>{
console.log("deleted");
setItems((oldItems)=>{
    return oldItems.filter((arrElement,index)=>{
        return index !== id
    })
})
}

  return (
    <div>
    
        <div className="inputField">
        <input type="text" className='form-control' placeholder='Add a Items' value={inputList} onChange={itemEvent} />
        <Button variant="contained" onClick={handleOftodoList}>
             <ModeEditIcon/>
        </Button>
        </div>
        <ol className='list-unstyled'>
        {
                items.map((itemsVal,index)=>{
                 return <TodoList key={index} id={index} 
                 txt={itemsVal} onSelect={deleteItems} />
                })
                }
           
        </ol>
    </div>
  )
}

export default Form