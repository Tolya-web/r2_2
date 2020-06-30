import React from 'react'


function TotalIssues(){
    return(
        <div className="app__info-item">
        <span className="app__info-text">Всего задач</span>
        <span className="app__info-number" id="js-all-tasks"></span>
    </div>
    )
  }

  export default TotalIssues;