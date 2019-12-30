import React from 'react' 

const Persons = (props) => {
    const filteredName = props.persons.filter(persons => persons.name.toLowerCase().includes(props.filt.toLowerCase()))
    return(
        filteredName.map(persons =>
            <div key = {persons.name}>
                {persons.name} {persons.number}
            </div>
    ))
}

export default Persons