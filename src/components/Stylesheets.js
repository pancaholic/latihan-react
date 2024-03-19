import React from 'react'
import './myStyles.css'

const Stylesheets = (props) => {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Im in my own universe give me space</h1>
    </div>
  )
}

export default Stylesheets
