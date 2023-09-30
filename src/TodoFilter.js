import './TodoFilter.css';
export { TodoFilter };

function TodoFilter(){
    return(
      // <input placeholder="~>Ingresa una tarea para buscar" />
      //
      <form action="" class="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required onChange={(event)=>{
          console.log('escribiste en el todofilter')
          console.log(event)
          console.log(event.target);
          console.log(event.target.value)
        }}/>
      <button class="search-btn" type="submit">
      <span>Search</span>
      </button>
      </form>
      //
    )
  }