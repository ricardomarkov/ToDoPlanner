import './TodoFilter.css';
export { TodoFilter };

function TodoFilter(){
    return(
      // <input placeholder="~>Ingresa una tarea para buscar" />
      //
      <form action="" class="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required />
      <button class="search-btn" type="submit">
      <span>Search</span>
      </button>
      </form>
      //
    )
  }