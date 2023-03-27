import React, { useState } from 'react'
import  randomColor from "randomcolor"

const HelloWorld = () => {
    const [color, setColor] = useState(randomColor())

  return (

    <>
    <h1 style={{color: color}} >Hello World</h1>
    <button onClick={() => setColor(randomColor())}>Click me!</button>
    </>
  )
}

export default HelloWorld