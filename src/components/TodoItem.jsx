import React from 'react'


import Button from './Button';
import ImportantBtn from './Important';
import CheckBox from './CheckBox';


function TodoItem(props){
  let arrTasks = ['Task1', 'Task2', 'Task3', 'Task4'];
    return(

     arrTasks.map((item, index) =>{
       return <li className="li" key={index}>{item}
        <CheckBox />
      <Button />
      <ImportantBtn />
     
     </li>
  
     })
    )
  }
  
  export default TodoItem;

 /* <li>
        {Task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
      </li>*/
