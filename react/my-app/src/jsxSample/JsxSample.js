import React from 'react'


//jsx elementi için () syntax kullanılır. JSX içerisinde JS kodu için {} kullanılır
function JsxSample() {

    let h1Element = (<h1>Tech Career</h1>) // tek element için paranteze gerek yok

    let name = "Musti coo";

    // returnde () olduğu an JSX'e geçilmiş demek oluyor!
  return (
    <>
        <p>{name.toUpperCase()}</p> 

        {h1Element}
    
    
    </>
  )
}

export default JsxSample