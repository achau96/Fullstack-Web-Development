import React from 'react' 

const PersonForm = ({newName, newNum, handleNameChange, handleNumChange, setPersons, persons, setNewName}) => {
    const addName = (event) => {
        var exists = false
        event.preventDefault()
        persons.forEach((persons) => persons.name === newName ? exists = true : null)
        if(exists === false){
        const nameObject = {
          name: newName,
          number: newNum
        }
      
        setPersons(persons.concat(nameObject))
        setNewName('')
        exists = false
      }
      else (window.alert(`${newName} is already added to phonebook`));
      }

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