// Header Component
import { useState } from "react";
function Header({title}) {
  return <header>{title}</header>;
}

// Button Component
 var number = 1;
function Button(){
  const [value,setValue ]= useState(0);
  console.log(number++);
  return <>
  <div style={{color:value>0?"green":value<0?"red":"gray"}}>{value}</div> 
  <button onClick={()=>setValue(value+1)}>Increase</button>
  <button onClick={()=>setValue(value-1)}>Decrease</button>
  <button onClick={()=>setValue(value!=0?0:value)}>Reset</button>

  {/* setValue is mean RECALL FUNCTION BUT UPDATE STATE  */}
  </>
}
function Counter(){
    return <>
            <Header/>
            <Button/>
           </>
}
export default Counter

