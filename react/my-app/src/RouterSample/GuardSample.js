import React from 'react'
import { Navigate } from 'react-router-dom';

function GuardSample({children}) {

    let userLogin = false;

    if(userLogin){

        return children
    }else{

        return <Navigate to="/login" replace={true}/>


    }
  
}

export default GuardSample