import React, { useState } from 'react'
import './TodoListCss.css'
import { MdDeleteSweep } from "react-icons/md";
function TodoList() {
  const [list, setList] = useState([])
  const [item, setItem] = useState("")
  let newList = []
  const addItem = () => {
    {
      if (item !== "") {
        newList = { id: Math.random(), todo: item }
        setList([...list, newList]);
        console.log(list)
        setItem("")
      }
    }
  }


  function deleteItem(idGiven) {
    const newlist = list.filter((todo) => todo.id !== idGiven)
    setList(newlist)
  }
  return (
    <div className='main'>
      <div className='wrapper'>
        <h1 className='h'>Todo List React App</h1>
        <div className='todoadd'>
          <input class='input' type="text" value={item} onChange={(e) => { setItem(e.target.value) }} placeholder='What is your target?' />
          <button id='addButton' onClick={addItem}>Add Todo</button>
        </div>
         
          {list.map(({ id, todo }) => (
            <div className="todoParent" key={id}>
              <div className='todo'>{todo}</div>
              <button onClick={()=>deleteItem(id)}><MdDeleteSweep /></button>
              
            </div>
          ))}
      

      </div>

    </div>
  )
}


export default TodoList