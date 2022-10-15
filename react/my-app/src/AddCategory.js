import React, { useState } from 'react'

function AddCategory({add}) {


    const[name, setname] = useState('') 
    const[description, setDescription] = useState('')



  return (
    <>

    <div>

        <div>

            <div>

            <label>Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)}></input>


            </div>

            <div>
                <label>Description: </label>
                <input type='text' onChange={(e) => setDescription(e.target.value)}/>

            </div>

            <div>

                <button onClick={() => add({name: name, description:description})}>Add</button>


            </div>
            





        </div>



    </div>
    
    
    </>
  )
}

export default AddCategory