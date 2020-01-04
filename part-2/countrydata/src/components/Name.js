import React,{useState} from 'react' 
import Display from './Display'
    
const Button = (props) => (
    <button onClick = {props.handleClick}> show </button>
  )

const Name = (props) => { 
    const [state,setState] = useState(Array(10).fill(false))
    

    const stateFunction = (array, index) => {
        return array.map((ele, num) => {
            if (num === index) {
                if(ele === false)
                return ele = true;
                else return ele = false
            }
            return ele;
        })
    }

    const filteredName = props.countries.filter(countries => countries.name.toLowerCase().includes(props.filt.toLowerCase()))

    if(filteredName.length === 1){
        return(
            <div>
                {filteredName.map(countries =>
                Display({countries}))}
            </div>       
        )
    }
    else if (filteredName.length <= 10)   
        return(
            <div>
            {filteredName.map((countries,index) =>
                <div key = {countries.name}>
                {countries.name}
                <Button handleClick = {() => setState(stateFunction(state,index))}/> 
                {state[index] === true ? Display({countries}):null} 
                </div>
            )}    
            </div>
    ) 
    else
        return(
            <div>
            Too many matches, specify another filter
            </div>
    )
    
}

export default Name