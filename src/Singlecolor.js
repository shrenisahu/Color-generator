
import React, { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "./App.css";

const Singlecolor=({rgb,weight,index,hex})=>{
    const[alert,setAlert]=useState(false);
    let bcg=rgb;


useEffect(()=>{

    const timeout=setTimeout(()=>{
setAlert(false)
    },1000)
    return()=>clearTimeout(timeout);
},[alert])





return(
<>

<div class=" shree noteCard card  " style={{width: "18rem"}}>
  <div class="card-body">
    

    
<div  
className={index >=10 ?"light" :null} 
 style={{backgroundColor:`rgb(${bcg})`}}


onClick={()=>{setAlert(true);
navigator.clipboard.writeText(hex)}}
>
<p>

{weight}%</p>
<p>#{hex}</p>


{
    alert && <p>copied to clipboard</p>
}
</div>
    
  </div>
</div>









</>)
}


export default Singlecolor;