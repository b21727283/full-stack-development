import React, {useState, useEffect} from 'react'

function ToDoList() {

    const [toDos, settoDos] = useState([]); // React Hooks

    const [toDoName, setToDoName] = useState('toDo');

    const addNewToDo = () => {

        let randomId = Math.floor(Math.random() * 1000)

        let newToDo = {
            id:randomId,
            name: toDoName,
            completed: false
        }

        settoDos([...toDos, newToDo])
        setToDoName('')
    }

    useEffect(() => {
        console.log(toDos);
      }, [toDos]);

    
    const crossOut = (event,id, index) => {

        // let todo = toDos.find(q => q.id == id)

        let todo = toDos[index]

        todo.completed = !todo.completed

        settoDos([...toDos])

        if(todo.completed){
            event.target.style.textDecorationLine="line-through";
        }else{
            event.target.style.textDecorationLine="";
        }
       

        /* console.log(event)
        console.log(event.target.style) */
    }

    const removeAll = () => {

        settoDos([])
    }


  return (<>
    <div>

        <label>ToDo Name</label>
        <input type="text" value={toDoName} onChange={(e)=> setToDoName(e.target.value)}></input>

    </div>

    <div>

        <button onClick={() => addNewToDo()}>Add</button>
        <button onClick={() => removeAll()}>Remove All</button>
    </div>

    <div>

        <ul>

            {
                toDos && toDos.map((item,index) => {
                    return (<li key={item.id} style={{cursor: 'pointer'}} onClick={(event) => crossOut(event, item.id, index)}>{item.name}</li>)
                })
            }


        </ul>


    </div>
    </>
  )
}

export default ToDoList