import React,{useState, useEffect} from 'react' 
import axios from 'axios'

const Weather = ({countries}) => { 
    const [weather, setWeather] = useState({location:{}, current: {}});
  
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countries}`
      axios.get(url)
      .then(response => {
        setWeather(response.data)
      })
    }, [countries]) // Fetch the data when countries changes
  
    return(
      <div>
        <h2>Weather in {weather.location.name}</h2>
        <h3>Temperature: {weather.current.temperature} </h3>
        <img src = {weather.current.weather_icons} alt = 'weather type' />
        <h3>Wind: {weather.current.wind_speed} kph direction {weather.current.wind_dir}</h3>
      </div>
    )
  }

  export default Weather