import { TodoContext } from '../TodoContext';
import './TodoFilter.css';
import React from 'react';
export { TodoFilter };

function TodoFilter(){
  const {
  filterValue,
  setFilterValue
} = React.useContext(TodoContext);

      return(
      <form action="" className="search-bar">
        <input type="search" className="search" pattern=".*\S.*" required value={filterValue} onChange={(event)=>{setFilterValue(event.target.value)
        }}/>
      <button class="search-btn" type="submit">
      <span>Search</span>
      </button>
      </form>
      //
    )
  }