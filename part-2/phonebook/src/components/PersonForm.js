import React, {useState, useEffect} from 'react' 
import personsService from '../services/persons'


const PersonForm = ({setNewNum, newName, newNum, handleNameChange, handleNumChange, setPersons, persons, setNewName}) => {
  const [id, setID] = useState(null) 

  const changeID = () => {
  persons.forEach((persons) => persons.name === newName ? (setID(persons.id),()=>{console.log('state completed', id)}): null)
  }


  useEffect(() => {
    console.log(id)
    if(id!==null){
    personsService
    .update((id),nameObject)
    .then(updatedPersons =>{
      setPersons(persons.map(persons => persons.name !== newName ? persons: updatedPersons))})}
      else {
        console.log('it is null')
      }
  },[id]
  )

  const nameObject = {
    name: newName,
    number: newNum
  }

  const addName = (event) => {
  
        var exists = false
        event.preventDefault()
        persons.forEach((persons) => persons.name === newName ? 
        exists = true : null)
        
       
        if(exists === false){
        personsService
          .create(nameObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNum('')
              exists = false  
            })
        
      }
      else if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)){
        changeID()
        console.log(nameObject.name)
    }}

    return(
        <form onSubmit = {addName}>
        <div>
          name: <input 
          value = {newName}
          onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input 
          value = {newNum}
          onChange = {handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm