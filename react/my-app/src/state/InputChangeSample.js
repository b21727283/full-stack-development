import React, { useState } from 'react'

function InputChangeSample() {

    const [formData, setformData] = useState({

        name: '',
        surname: '',
        email: ''
    })


    const changeInput = (element) => {


        setformData((prevState) => {
            return({
              ...prevState,
              [element.name]: element.value
            });
        })



    }


  return (
    <>

    <div>
        <label>Name:</label>
        <input type="text" value= {formData.name} name="name" onChange={
            (e) => {changeInput(e.target)}
        }></input>
    </div>

    <div>
        <label>Surname:</label>
        <input type="text" value= {formData.surname} name="surname" onChange={
            (e) => {changeInput(e.target)}
        }></input>
    </div>

    <div>
        <label>Email:</label>
        <input type="email" value= {formData.email} name="email" onChange={
            (e) => {changeInput(e.target)}
        }></input>
    </div>
    
    
    </>
  )
}

export default InputChangeSample