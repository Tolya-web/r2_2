import React from 'react';


import TodoItem from './TodoItem';



function TodoList(){
    return(
      <ul className="ul">
       <TodoItem className="ul" name="задача1"/>
    
      </ul>
    )
  }
  
 export default TodoList;