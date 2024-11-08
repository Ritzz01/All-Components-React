import React, { useState } from 'react'

function Usestate() {
    const[count,setCount]=useState(0)
  return (
    <div>
      <h1>Usestate() hooks</h1>
      <h1>{count}</h1>

      <button onClick={()=>{setCount(count+1)}}>Add</button>
      <button onClick={()=>{setCount(count-1)}}>Sub</button>
    </div>
  )
}

export default Usestate
