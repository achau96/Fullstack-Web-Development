import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filt, setNewFilt] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fufilled')
      setPersons(response.data)
    })
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
      <Filter handleFiltChange = {handleFiltChange}/>
      <h2>add a new</h2>
      <PersonForm handleNameChange = {handleNameChange} handleNumChange = {handleNumChange}
      newName = {newName} newNum = {newNum} persons = {persons} setPersons = {setPersons} setNewName = {setNewName}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} filt = {filt}/>
    </div>
  )
}

export default App