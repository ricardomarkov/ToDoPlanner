import { useLocalStorage } from './useLocalStorage';
import {AppUI} from './AppUI';
import React from 'react';

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const {
    item: todos,
    storeItem: storeTodo,
    loading,
    error
  }=useLocalStorage('TODOPLANNER_V1',[]);
  const [filterValue, setFilterValue] = React.useState('');
  const completedTodos = todos.filter(todo =>!!todo.completed).length;
  const totalTodos= todos.length;


  const filteredTodos=todos.filter(
    (todo)=>{
      const todoText=todo.text.toLowerCase();
      const filterText=filterValue.toLowerCase();
      return todoText.includes(filterText);
    }
  )
  const completeTodo= (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    storeTodo(newTodos);
  }
  const deleteTodo= (text)=>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text);
    newTodos.splice(todoIndex, 1);
    storeTodo(newTodos);
  }
  return(
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      filterValue={filterValue}
      setFilterValue={setFilterValue}
      filteredTodos={filteredTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
  />
  )
}
export default App;
