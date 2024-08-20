import React from 'react'
import TodoList from './TodoList'
import { useParams } from 'react-router-dom'
function Home() {
  const params= useParams();
  return (
    
    <div>You are in Home and Perticularly in the {params.user} </div>
  )
}

export default Home