import './TodoItem.css';
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import React from 'react';
export { TodoItem };

function TodoItem(props){
    return(
      <li className="TodoItem">
        <DeleteIcon/>
        {/* <span className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}>&#x2611;</span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        {/* <span className="Icon Icon-Delete" onClick={props.onDelete}>&#x10102;</span> */}
        <CompleteIcon/>
      </li>
    );
  }