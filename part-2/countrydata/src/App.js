import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Name from './components/Name'

const App = () => {

  const [ filt, setNewFilt] = useState('')
  const [ countries, setCountries] = useState([])

  const handleFiltChange = (event) => {
    setNewFilt(event.target.value)
  }

  
  useEffect(() => {
    
    console.log('effect')
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  },[])

  
  return (
    <div>
      <div>
      find countries <input onChange = {handleFiltChange}/> 
      </div>
      <div>
      <Name countries = {countries} filt = {filt}/>
      </div>
    </div>
  )
}

export default App;
