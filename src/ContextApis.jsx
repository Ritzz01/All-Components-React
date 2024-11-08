import React, { createContext } from 'react'
import { useContext } from 'react';


//creation phase

const create=createContext()

// console.log(create);

//wrapping phase

export function Wrapper(props)
{
  let details={
    name:'Alu',
    age:19
  }
    return(

      <create.Provider value={details} >
          {props.children}
      </create.Provider>
    )

}

//consumer

export const useData=()=>{
  return useContext(create)
}



function ContextApis() {
  return (
    <div>
      <h1>Context Api</h1>
    </div>
  )
}

export default ContextApis
