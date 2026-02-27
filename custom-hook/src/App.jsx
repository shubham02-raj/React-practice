import React from 'react'
import './App.css'
import useToggle from './useToggle'

const App = () => {
  const [value, toggleValue] = useToggle(true);

  console.log('value----  ', value);
  
  return (
    <div>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=> toggleValue(false)}>Hide Heading</button>
      <button onClick={()=> toggleValue(true)}>Show Heading</button>

      {
        value? <h1>Custome hook</h1> : null
      }
      
    </div>
  )
}

export default App
