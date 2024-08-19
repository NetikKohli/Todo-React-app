import React from 'react'

function Data() {
  let data=[{
    a:10,
    b:"hello"
  }]
  return (
     data.map(({a,b})=>
    (<><h1>{a}</h1>
     <h1>{b}</h1></>)
  ))
}

export default Data