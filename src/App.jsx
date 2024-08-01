import React from 'react'
import './App.css'
import { useState } from 'react';

const App = () => {

  // const [color, setColor] = useState('Red')

  // const changeColor = () => {
  //   setColor('Blue');
  // }

  const [color, setColor] = useState("Yes")

  return (
    <div>
      <h1>React UseState</h1>
      <h3>My favourite color is {color}</h3>
      {/* <button onClick={() => { setColor("Blue") }}>Change Color</button> */}
      <button onClick={() => { setColor("No") }}>Change Color</button>
    </div>
  )
}

export default App