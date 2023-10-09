import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';
export { TodoCounter };

function TodoCounter(){
  const {
    completedTodos,
    totalTodos
  }= React.useContext(TodoContext)
    return(
      <h1>
        <span class="highlight">~Completed {completedTodos} / {totalTodos} To Do's</span>
      </h1>
    )
  }