import React from 'react' 
import personsService from '../services/persons'

const Button = (props) => (
    <button onClick = {props.handleClick}> delete </button>
  )
const Persons = (props) => {
    const filteredName = props.persons.filter(persons => persons.name.toLowerCase().includes(props.filt.toLowerCase()))
    return(
        filteredName.map(persons =>
            <div key = {persons.name}>
                {persons.name} {persons.number} 
                <Button handleClick = {() => 
                (window.confirm(`Delete ${persons.name}?`)) ?
                    personsService
                        .deleteID(persons.id)
                            .then(() => props.setPersons(props.persons.filter(n => n.id !== persons.id)))
                        .catch(error =>{
                            alert(`the person '${persons.name}' was already removed`)
                            props.setPersons(props.persons.filter(n => n.id !== persons.id))
                        })
                            : null
                        }/>
            </div>
    ))
}

export default Persons