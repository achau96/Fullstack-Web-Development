import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick = {props.handleClick}> {props.text} </button>
)


const Statistic = (props) => (  
  <tr>
    <td>{props.text} </td>
    <td>{props.value} {props.text2}</td>  
  </tr>  
)

const Statistics = (props) => {
    if(props.good === 0 && props.bad === 0 && props.neutral === 0){
      return(
      <div>
        No feedback given
      </div>
      )
    }
    else {
      return(
    <table>
      <tbody>
        <Statistic text = 'good' value = {props.good} />
        <Statistic text = 'neutral' value = {props.neutral}/>
        <Statistic text = 'bad' value = {props.bad}/>
        <Statistic text = 'average' value = {(props.good*1 +props.bad*-1 +props.neutral*0)/(props.good+props.bad+props.neutral)}/>
        <Statistic text = 'positive' value = {props.good*100/(props.good+props.bad+props.neutral)} text2 = '%'/>
      </tbody>  
    </table>
      )
    }
  }



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick = {() => setGood(good+1)} text = 'good'/>
        <Button handleClick = {() => setNeutral(neutral+1)} text = 'neutral'/>
        <Button handleClick = {() => setBad(bad+1)} text = 'bad'/>
      <h1>statistics</h1>
        <Statistics good = {good} bad = {bad} neutral = {neutral}/>  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)