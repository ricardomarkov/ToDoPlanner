import React from "react";
import './TodoForm.css';
import {TodoContext} from '../TodoContext';


function TodoForm(){
const {
    submitTodo,
    setOpenModal,
} = React.useContext(TodoContext);

const [newTodoValue, setNewTodoValue] = React.useState('');

const onSubmit=(event)=>{
        event.preventDefault();
        submitTodo(newTodoValue);
        setOpenModal(state => false);
    }

const onCancel=(event)=>{
    setOpenModal(state => false);
}

const onChange=(event)=>{
    setNewTodoValue(event.target.value);
}

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>Escribe tu nuevo 'To Do'</label>
            <textarea placeholder="Type your task here" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
            <button type="button" className="TodoForm-button--cancel" onClick={onCancel}>Cancel</button>
            <button type="submit" className="TodoForm-button--submit">Submit</button>
           </div>
        </form>
    )
}

export {TodoForm};