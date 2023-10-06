import './TodoLoading.css';
import React from 'react';
import './TodoLoading.css';

function TodoLoading(){
      return(
        <li className="TodoItem">
        <p className={`TodoItem-p "TodoItem-p--complete"}`}>Actualizando lista...</p>
        </li>
      //
    )
  }

  export { TodoLoading };