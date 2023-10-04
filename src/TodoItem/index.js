import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import React from 'react';
export { TodoItem };

function TodoItem(props){
    return(
      <li className="TodoItem">
        <DeleteIcon
        onDelete={props.onDelete}/>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}/>
      </li>
    );
  }