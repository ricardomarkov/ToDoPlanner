import './TodoItem.css';
export { TodoItem };

function TodoItem(props){
    return(
      <li className="TodoItem">
        <span className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}>&#x2611;</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-Delete">&#x10102;</span>
      </li>
    );
  }