import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>(
  <button onClick = {props.handleClick}>{props.text}</button>
)

const Random = (len) => {
  var x = Math.floor((Math.random() * len))
  return x
}

const increment = (array,index) => {
   return array.map((ele,num) => {
    if (num === index){
    return ele + 1;
    }
    return ele;
   })
}

const largestVotes = (array) => {
    var max = array[0]
    var maxIndex = 0
  for(var i = 1; i<array.length;i++){
    if(array[i]>=max){
      max = array[i]
      maxIndex = i
    }
  }
  return maxIndex
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br  />
      has {points[selected]} votes<br  />
      <Button handleClick = {() => setPoints(increment(points,selected))} text = 'vote'/>
      <Button handleClick = {() => setSelected(Random(anecdotes.length))} text = 'next anecdote'/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[largestVotes(points)]}<br  />
      has {points[largestVotes(points)]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

