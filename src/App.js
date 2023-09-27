// import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoFilter />

    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>

    {/* <CreateTodoButton /> */}

    </div>
  );
}

export default App;
