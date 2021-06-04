import React, { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Singlecolor from "./Singlecolor";
import "./App.css";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import Values from 'values.js';
import { Jumbotron, Container } from 'reactstrap';
const App=()=>{
  const[color,setColor]=useState("");
  const [error,setError]=useState(false);
  const[list,setList]=useState([]);
const[modal,setModal]=useState(false);

  const Submit=(e)=>{
e.preventDefault();
try {
  let colors=new Values(color).all(10);
console.log(colors);
console.log(color);
setList(colors);
setModal(true);
}
 catch (error) {
  setError(true);
  console.log(error);
}

  }
return(
  <>
  <div className="container-fluid">

  <div>
      <Jumbotron fluid className="bg-secondary text-white">
        <Container fluid >
          <h1 className="display-3">Color generator</h1>
          
          <br></br>
          <form onSubmit={Submit}>

<InputGroup>
        <Input 


placeholder=" enter hex value eg: #f15025"
type="text"
 onChange={(e)=>setColor(e.target.value)}
 value={color} 
 className={`${
   error ?"error"  :null
 }`}
        />
        <InputGroupAddon addonType="append">
          <Button  type='submit'color="secondary">GENERATE</Button>
        </InputGroupAddon>
      </InputGroup>



  </form>
        </Container>
      </Jumbotron>
    </div>





  {modal?


  

  <h3 className="centre">shades and tints of <b>{color} </b> are </h3>
  
  :null}

<br></br>
  <div id="notes" className=" row container-fluid ">
  
          
  {
list.map((props,index)=>{
  
  
  return(
    <>

    


    <Singlecolor key={index} {...props} index={index}
    hex={props.hex}></Singlecolor>
      
    </>
  )
})

  }
      </div>
  </div>
  </>
)
  
}
export default App;






























































