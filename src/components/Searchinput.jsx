import React from 'react'

import FilterInput from './FilterInput';

function SearchInput(){
    return(
      <div>
      <label htmlFor="qwer">Ввести в поиск</label>
      <input className="inpu" placeholder="Text inputs" id="qwer"/>
      <FilterInput />
      </div>
  
    )
  }

  export default SearchInput;
