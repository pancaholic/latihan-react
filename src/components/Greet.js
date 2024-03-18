import React from 'react'

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}, role kamu adalah {props.roleName}</h1>
            {props.children}
        </div>
    )
}

export default Greet
