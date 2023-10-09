import './CreateTodoButton.css';
import React from 'react';
export { CreateTodoButton }
function CreateTodoButton({setOpenModal}){
    return(
        <button className="create-todo-button" onClick={
                // console.log('le diste click')
                // console.log(event)
                // console.log(event.target)
                ()=>{
                    setOpenModal(state=>!state);
                }
            }
        >New Task</button>
    )
}