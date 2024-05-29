// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import qs from 'qs';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const handle = ()=>{
    let data = qs.stringify({
      'code': 'val = int(input("Enter your value: ")) + 5\nprint(val)',
      'language': 'py',
      'input': '7'
  });
  let config = {
      method: 'post',
      url: 'https://api.codex.jaagrav.in',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
  };
  axios(config)
  .then(function (response) {
    console.log("response was ", response);
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  return (
    <button onClick={handle}>Click me for answer</button>
  )
}

export default App
