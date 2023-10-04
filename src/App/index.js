import { useLocalStorage } from './useLocalStorage';
import {AppUI} from './AppUI';
import React from 'react';

function App() {
  const [todos, storeTodo]=useLocalStorage('TODOPLANNER_V1',[]);
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
