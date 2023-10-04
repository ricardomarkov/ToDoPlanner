import './TodoFilter.css';
import React from 'react';
export { TodoFilter };

function TodoFilter({
  filterValue,
  setFilterValue
}){
      return(
      // <input placeholder="~>Ingresa una tarea para buscar" />
      //
      // <>
      // <p>Diste click {state} veces</p>
      <form action="" className="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required value={filterValue} onChange={(event)=>{setFilterValue(event.target.value)
        }}/>
      <button class="search-btn" type="submit">
      <span>Search</span>
      </button>
      </form>
      //
    )
  }