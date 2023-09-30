import './CreateTodoButton.css';
import React from 'react';
export { CreateTodoButton }
function CreateTodoButton(){
    return(
        <button className="create-todo-button" onClick={
            (event)=>{
                console.log('le diste click')
                console.log(event)
                console.log(event.target)
            }
        }
        >New Task</button>
    )
}