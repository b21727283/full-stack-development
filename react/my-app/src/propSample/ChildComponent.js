import React from 'react'

function ChildComponent({merhaba}) {


  return (
    <button onClick={() => merhaba()}>Click Me!</button>
  )
}

export default ChildComponent