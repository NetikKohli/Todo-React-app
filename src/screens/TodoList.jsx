import React, { useState } from 'react'
import './TodoListCss.css'
function TodoList() {
  const [list,setList]=useState([])
  const [item,setItem]=useState("")
  const addItem=()=>{
    const newList={id:Math.random(), todo:item};
    setList([...list,newList]);
    console.log(list)
    setItem("");
  }
  function deleteItem(idGiven){
    const newlist=list.filter((todo)=>todo.id!==idGiven)
    setList(newlist)
  }
  return (
    <div className='main'>
      <div className='wrapper'>
      <h1 className='h'>TODO List React App</h1>
       <input class='input' type="text" value={item} onChange={(e)=>{setItem(e.target.value)}}/>
       <button id='addButton' onClick={addItem}>Add Todo</button>
      </div> 
    <ul>
      {list.map(({id,todo})=>(
         <li key={id}>
             {todo} &nbsp;
             <button onClick={()=>deleteItem(id)}>&times;</button>
         </li>
      ))}
    </ul>
    </div>
  )
}

export default TodoList