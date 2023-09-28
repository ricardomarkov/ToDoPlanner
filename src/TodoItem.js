import './TodoItem.css';
export { TodoItem };

function TodoItem(props){
    return(
      <li>
        <span>&#x2611;</span>
        <p>{props.text}</p>
        <span>&#x10102;</span>
      </li>
    );
  }