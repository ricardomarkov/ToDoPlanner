import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos=[
  { text: '~ >Cortar cebolla', completed: true},
  { text: '~ >Terminar el curso de React.js', completed: false},
  { text: '~ >Hacer la cena', completed: true},
  { text: '~ >Limpiar el cuarto', completed: false},
  { text: '~ >Ordenar mi escritorio', completed: true}
];

function App() {
  const [todos, setTodos]=React.useState(defaultTodos)

  const completedTodos = todos.filter(todo =>!!todo.completed).length;
  const totalTodos= todos.length;

  const [filterValue, setFilterValue] = React.useState('');
  
  const completeTodo= (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo= (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  const filteredTodos=todos.filter(
    (todo)=>{
      const todoText=todo.text.toLowerCase();
      const filterText=filterValue.toLowerCase();
      return todoText.includes(filterText);
    }
  )

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

export default App;
