import React from 'react'

// Destructuring
const Greet = ({name, roleName}) => {
    return (
        <div>
            <h1>Hello {name}, role kamu adalah {roleName}</h1>
        </div>
    )
}

export default Greet
