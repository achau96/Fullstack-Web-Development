import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const Notification = ({ message,error }) => {
  if (message === null) {
    return null
  }
  if(error === false)
  return (
    <div className="addName">
      {message}
    </div>
  )
  else return(
    <div className="error">
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filt, setNewFilt] = useState('')
  const [ message, setMessage] = useState(null)
  const [ error, setError] = useState(false)

  useEffect(() => {
    personsService
      .getAll()
      .then(personList => 
        setPersons(personList))

  }, [])
  
  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleFiltChange = (event) => {
    setNewFilt(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {message} error = {error}/>
      <Filter handleFiltChange = {handleFiltChange}/>
      <h2>add a new</h2>
      <PersonForm setError = {setError} setMessage = {setMessage} message = {message} handleNameChange = {handleNameChange} handleNumChange = {handleNumChange}
      newName = {newName} newNum = {newNum} persons = {persons} setPersons = {setPersons} setNewName = {setNewName} setNewNum = {setNewNum}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} filt = {filt} setPersons = {setPersons} />
    </div>
  )
}

export default App