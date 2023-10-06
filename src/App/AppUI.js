import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoLoading} from '../TodoLoading';
import { TodoError} from '../TodoError';
import { TodoEmpty} from '../TodoEmpty';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
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
    <CreateTodoButton />
    </>
    );
}

export {AppUI};