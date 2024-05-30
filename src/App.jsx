// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import qs from 'qs';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const handle = ()=>{
    console.log("btn clciked")
  }
  return (
    <button onClick={handle}>Click me for answer</button>
  )
}

export default App
