export { TodoCounter };

function TodoCounter({total, completed}){
    return(
      <h1>
        Has completado
        {completed} de
        {total} To Do's
      </h1>
    )
  }