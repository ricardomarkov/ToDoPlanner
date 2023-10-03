import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import react from 'react';

// const defaultTodos=[
//   { text: '~ >Cortar cebolla', completed: true},
//   { text: '~ >Terminar el curso de React.js', completed: false},
//   { text: '~ >Hacer la cena', completed: true},
//   { text: '~ >Limpiar el cuarto', completed: false},
//   { text: '~ >Ordenar mi escritorio', completed: true}
// ];

// localStorage.setItem('TODOPLANNER_V1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOPLANNER_V1');

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem=initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  const storeItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }
  return [item, storeItem];
}

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
