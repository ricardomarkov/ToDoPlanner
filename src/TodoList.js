import './TodoList.css';
export { TodoList };

function TodoList(props){
    return(
      <ul>{props.children}</ul>
    )
  }