import React from 'react'

const ClickFunction = () => {

    function clickHandler() {
        console.log("Button Clicked")
    }

  return (
    <div>
      <button onClick={clickHandler}>Click Here</button>
    </div>
  )
}

export default ClickFunction
