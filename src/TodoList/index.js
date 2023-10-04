import './TodoList.css';
import React from 'react';
export { TodoList };

function TodoList(props){
    return(
      <ul>{props.children}</ul>
    )
  }