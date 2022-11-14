import "./App.css";
import MyButton from "./components/MyButton";
import {useState} from 'react'
import ProfileCard from "./components/ProfileCard";
// want to make a COUNTER app
// 1. make a button
// 2. detect when the button is clicked

// How to build a new component
// 1. Create a new file with the name of your comp MyThings.js
// 2. You're going to put that file in components
// 3. go into your file & type 'rafce' and then hit tab
// 4. build your component
// 5. go into App.js and import your components

// State
function App() {
  const [count, setCount] = useState(30)
  // const myAge = 20;
  return (
    <>
      <h2 style={{ color: "red" }}>{count}</h2>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <button onClick={() => {setCount(count - 1)}}>-</button>
      <MyButton title = 'Buy' color= 'red' />
      <MyButton title = 'Sell' color = 'green' />
      <ProfileCard/>
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
