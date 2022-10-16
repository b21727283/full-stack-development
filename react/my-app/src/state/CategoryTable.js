import React, { useState } from 'react'
import {categories} from "../data/categories"

function CategoryTable() {

    const [categoryList, setcategoryList] = useState(categories)
    const [categoryName, setcategoryName] = useState('')
    const [categoryDesc, setcategoryDesc] = useState('')
    const [nameOrderStatus, setnameOrderStatus] = useState(false)

    const removeAll = () => {

        setcategoryList([])

    }

    const deleteCategory = (id) => {

        let filteredCategories = categoryList.filter(q => q.id != id)

        setcategoryList([...filteredCategories])


    }


    const Add = () => {


        let categoryId = Math.max(...categoryList.map(o => o.id)) + 1
        // let randomId = Math.floor(Math.random() * 1000)

        let category = {
            "id": categoryId,
            "description": categoryDesc,
            "name": categoryName
          }


        return setcategoryList([...categoryList, category])
       
        


    }

    const orderByName = () => {

        if(nameOrderStatus){

            categoryList.sort((a,b) => a.name.localeCompare(b.name));

            setcategoryList([...categoryList])

            setnameOrderStatus(!nameOrderStatus)
            
        }else{

            categoryList.sort((a,b) => b.name.localeCompare(a.name));

            setcategoryList([...categoryList])

            setnameOrderStatus(!nameOrderStatus)

        }
        

    
    }



  return (
    <>

    <div>
        <div>
            <label>Name:</label>
            <input type="text" onChange={(e) => setcategoryName(e.target.value)}></input>
        </div>

        <div>
            <label>Description:</label>
            <input type="text" onChange={(e) => setcategoryDesc(e.target.value)}></input>
        </div>

        <div>
            <button onClick={(e) => Add(e)}>Add Category</button>
        </div>
    </div>

    

    <table>


        <thead>
            <tr>

                <th>Id</th>
                <th style={{cursor: 'pointer'}} onClick={() => orderByName()}>Name</th>
                <th>Description</th>

            </tr>

        </thead>

        <tbody>

            {

                categoryList.map((item,key) => {


                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td><button onClick={() => deleteCategory(item.id)}>Delete</button></td>
                </tr>
                })
            }

            




        </tbody>




    </table>

    <button onClick={() => removeAll()}>Remove All</button>
    
    
    
    
    </>
  )
}

export default CategoryTable