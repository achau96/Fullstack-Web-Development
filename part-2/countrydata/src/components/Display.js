import React from 'react' 
import Weather from './Weather'

const Display = ({countries}) => {
    
    return(
        <div key={countries.name}>
            {console.log('enters display')}
            <h1>
                {countries.name}
            </h1>
            <div>
                Capital City: {countries.capital}
            </div>
            <div>
                Population: {countries.population}
            </div>
            <h2>
                Languages
                </h2>
            <div>
                {countries.languages.map(languages =>
                    <li key = {languages.name}>{languages.name}</li>)}
            </div>
            <div>
                <img
                    src={countries.flag}
                    width="150"
                    alt="new"
                />
            </div>
            <div>
            <Weather countries = {countries.name}/>
            </div>
        </div>
    )
}


export default Display