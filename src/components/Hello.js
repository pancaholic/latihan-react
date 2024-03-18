import React from 'react'

const Hello = () => {
//   return (
//     <div className='dummyClass'>
//       <h1>Ini Contoh JSX</h1>
//     </div>
//   )

//  Contoh Tanpa JSX
    return React.createElement(
        'div', 
        {id: 'Hello', className: 'Maine'}, // null untuk memberikan ID atau class
        React.createElement('h1', null, "Contoh Tanpa JSX"));
}

export default Hello
