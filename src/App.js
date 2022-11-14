import "./App.css";
import "./MyButton.js";
import {useState} from 'react'
// want to make a COUNTER app
// 1. make a button
// 2. detect when the button is clicked
// State
function App() {
  const [count, setCount] = useState(30)
  // const myAge = 20;
  return (
    <>
      <h2 style={{ color: "red" }}>{count}</h2>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <button onClick={() => {setCount(count - 1)}}>-</button>
      <MyButton/>
    </>
  );
}

export default App;

// JSX
// how to make a funcational component
// variables
// console logging
// How to write JSX
// { stuff in here is JAVASCRIPT } these squi
// inline styling
// JSX {put stuff in here }
