import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoLoading} from '../TodoLoading';
import { TodoError} from '../TodoError';
import { TodoEmpty} from '../TodoEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI(){
return (
    <>
    <TodoCounter/>
    <TodoFilter/>
    <TodoContext.Consumer>
        {({
            loading,
            error,
            filteredTodos,
            completeTodo,
            deleteTodo
        })=>(
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
        )}
    </TodoContext.Consumer>
    <CreateTodoButton />
    </>
    );
}

export {AppUI};