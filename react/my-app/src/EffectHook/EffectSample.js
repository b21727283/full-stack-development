import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setcounter] = useState(0)
    const [counter2, setcounter2] = useState(0)


    // bu kod bloğu sadece bir kere çalışır !!
    useEffect(() => {
      
        console.log('Use Effect')
      
    }, [])


    // bu kod bloğu sadece counter2 değiştiğinde çalışır
    useEffect(() => {
      
        console.log('Use Effect 2')
      
    }, [counter2])
    
    // bu component state değiştiğinde
    // parent component state değiştiğinde
    console.log('EFFECT SAMPLE RENDERED')

    
  return (
    <>

<div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increase</button>

</div>
    
<div>
    <h1>Counter 2: {counter2}</h1>
    <button onClick={() => setcounter2(counter + 1)}>Increase 2</button>
    

</div>
    
    
    </>
  )
}

export default EffectSample