

import React, { useState } from 'react'


export default function Light() {


  
const[mode,setMode]=useState(false)
        document.body.style.backgroundColor= mode ? "black" :"white" 
          document.body.style.color=  mode? "grey":"black"

    function fun()
    {
              
              setMode((prev)=>!prev)
              
          
    }
          

  return (
    <button onClick={fun}>
   {mode?"DARK MODE":"LIGHT MODE"}

   

    </button>
  
     
  
  )
}