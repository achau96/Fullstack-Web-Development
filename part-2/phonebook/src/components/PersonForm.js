import React, {useState, useEffect} from 'react' 
import personsService from '../services/persons'


const PersonForm = ({setError, setMessage, setNewNum, newName, newNum, handleNameChange, handleNumChange, setPersons, persons, setNewName}) => {
  const [id, setID] = useState(null) 

  const changeID = () => {
  persons.forEach((persons) => persons.name === newName ? (setID(persons.id)): null)
  }

  useEffect(() => {
    if(id!==null){
    personsService
    .update((id),nameObject)
    .then(updatedPersons =>{
      setPersons(persons.map(persons => persons.name !== newName ? persons: updatedPersons))})
      .catch(error =>{
        setError(true)
        setMessage(`${nameObject.name} has already been deleted from server`)
        setTimeout(() => {
          setMessage(null)
          setError(false)
        }, 2000)
      })
    setMessage(`Changed ${nameObject.name}'s number to ${nameObject.number}`)
    setID(null)
    setTimeout(() => {
      setMessage(null)
    }, 2000)}
      else {
        console.log('null, do not run')
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
              setMessage(`Added ${nameObject.name}`)
              setTimeout(() => {
                setMessage(null)
              }, 5000)
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