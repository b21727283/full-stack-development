import React, {useState} from 'react'

function ChildCounter(props) {


    const [number, setnumber] = useState(100)


    


  return (
    <>
        <h1>Child Counter</h1>
        <h3>{props.counter}</h3>
        <input type= "number" onChange={(e) => setnumber(e.target.value)}></input>
        <button onClick={() => props.getData(number)}>Send Data to parent comp</button>
    
    </>
  )
}

export default ChildCounter