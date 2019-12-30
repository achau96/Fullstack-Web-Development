import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filt, setNewFilt] = useState('')

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