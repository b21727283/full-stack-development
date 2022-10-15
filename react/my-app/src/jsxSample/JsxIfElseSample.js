import React from 'react'

function JsxIfElseSample() {

    let onlineStatus = true;


  return (

    <>
    
    {
        /* tek satırlık if else blokları () içinde yazılmayabilir */

        onlineStatus == true ? <><h1> User Online </h1> <h1>aaa</h1></>: (<h1> User Offline </h1>) 
        
        
    }

    

    <p>
      {(() => {
        switch (onlineStatus) {
          case true:   return "ahhahahha";
          case false: return "pehepeh";
        }
      })()}
    </p>

      
    
    
    
    </>
  )
}

export default JsxIfElseSample