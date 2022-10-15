import React, { useState } from 'react'

function CounterSample() {

    const [counter, setCounter] = useState(5)


    const increase = () =>

    {
      setCounter(counter + 1)
    }


    const decrease = () =>
    {

      setCounter(counter - 1)
    }




  return (
    <>

    <h1>

      {counter}
    </h1>

    <button onClick={() => increase()}>

    Increase
    </button>

    <button onClick={() => decrease()}> Decrease</button>
    
    
    </>
  )
}

export default CounterSample