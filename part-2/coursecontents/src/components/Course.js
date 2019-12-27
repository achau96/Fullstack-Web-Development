import React from 'react'

const Course = (props) => {

return(
  <div>
    <h2>{props.course.name}</h2>
    <div>{props.course.parts.map(parts =>
      <p key = {parts.id}> 
      {parts.name} {parts.exercises}
      </p>)}
    </div>
    <p>  
      <strong>total of {(props.course.parts.map(({exercises}) => exercises)).reduce((s,p) => s+p)} exercises </strong>
    </p>
  </div>
)
}

/* map exercises into its own array to be reduced (s stands for sum, p for parameter) */

export default Course