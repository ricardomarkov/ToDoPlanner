import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos=[
  { text: 'Cortar cebolla', completed: false},
  { text: 'Terminar el curso de React.js', completed: false},
  { text: 'Hacer la cena', completed: true},
  { text: 'Limpiar el cuarto', completed: false},
  { text: 'Ordenar mi escritorio', completed: true}
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoFilter />

    <TodoList>
      {defaultTodos.map(todo=>(
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />
      ))}
    </TodoList>

    <CreateTodoButton />
    </>
  );
}

export default App;
