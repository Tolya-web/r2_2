import React from 'react'


import TotalIssues from './TotalIssues';
import CompletedTasks from './CompletedTasks'

function Info(){
    return(
        <div className="app__info">
            <TotalIssues />
            <CompletedTasks />


        </div>
  
    )
  }

  export default Info;
