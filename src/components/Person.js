import React from 'react'

function Person({person}) {
  return (
    <div>
      <h3>Nama Saya, {person.name} saya berada di kelas {person.class}</h3>
    </div>
  )
}

export default Person
