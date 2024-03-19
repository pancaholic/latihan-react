import React from 'react'
import Person from './Person'

const NameList = () => {
    const names = ['Panca', 'Stella', 'Halid']
    const persons = [
        {
            id: 1,
            name: 'Putra Panca Prasetya',
            class: 'MIPA 01'
        },
        {
            id: 2,
            name: 'Muhammad Faruq Haqim',
            class: 'MIPA 02'
        },
        {
            id: 3,
            name: 'Said Didu Melanja',
            class: 'MIPA 03'
        },
    ]

    const personList = persons.map(person => 
        <Person key={person.id} person={person}/>
    )

    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

  return (
    <div>
        {nameList}
    </div>
  )
}

export default NameList
