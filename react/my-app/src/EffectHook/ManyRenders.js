import React, { useState, useEffect } from 'react'

function ManyRenders() {

    const [webUser, setwebUser] = useState({})

    /*setwebUser({
        name: 'Mustiii',
        surname: 'aaaaa'
    })*/


    useEffect(() => {
        setwebUser({
            name: 'Mustiii',
            surname: 'aaaaa'
        })

    }, [])
    

  return (
    <>

    <h1>{webUser.name}</h1>
    <h1>{webUser.surname}</h1>
    
    
    </>
  )
}

export default ManyRenders