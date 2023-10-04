import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    filterValue,
    setFilterValue,
    filteredTodos,
    completeTodo,
    deleteTodo,
}){
return (
    <>
    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoFilter 
    filterValue={filterValue}
    setFilterValue={setFilterValue}
    />
    <TodoList>
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
    <CreateTodoButton />
    </>
    );
}

export {AppUI};