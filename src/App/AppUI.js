import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoLoading} from '../TodoLoading';
import { TodoError} from '../TodoError';
import { TodoEmpty} from '../TodoEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import {TodoForm} from '../TodoForm';

function AppUI(){
    const {
        loading,
        error,
        filteredTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
    <>
    <TodoCounter/>
    <TodoFilter/>
        <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError/>}
        {(!loading && filteredTodos.length === 0)&&<TodoEmpty/>}

        {filteredTodos.map(todo=>(
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        />
        ))}
        </TodoList>
    <CreateTodoButton setOpenModal={setOpenModal}/>
    {openModal && (
        <Modal>
        <TodoForm/>
        </Modal>
    )}
    </>
    );
}

export {AppUI};