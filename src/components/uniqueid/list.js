import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const kabir=[

    {
        title:"apple1",
        desc:"i will eat it 1 apple",
    },
    {
        title:"apple2",
        desc:"i will eat it 2 apple",

    },
      {
        title:"apple3",
        desc:"i will eat it 3 apple",
      },

];

const list = () => {
  return (
    <div>
    {kabir.map((todo,)=>{
        return <div key={uuidv4()}>
         <h3 >{todo.title}</h3>
         <p>{todo.desc}</p>
        </div>

    })}
    
    </div>
  )
}

export default list