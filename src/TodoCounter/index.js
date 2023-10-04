import './TodoCounter.css';
import React from 'react';
export { TodoCounter };

function TodoCounter({total, completed}){
    return(
      <h1>
        <span class="highlight">~ Has completado {completed} de {total} To Do's</span>
      </h1>
    )
  }