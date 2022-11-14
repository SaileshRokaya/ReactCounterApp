import "./App.css";
import MyButton from "./components/MyButton";
import { useState } from "react";
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
  const [count, setCount] = useState(30);
  // const myAge = 20;
  return (
    <>
      <h2 style={{ color: "red" }}>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <MyButton title="Buy" color="red" />
      <MyButton title="Sell" color="green" />
      <ProfileCard
        image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/311454587_1799909447028677_5572289310893600927_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2uAedg3kY5IAX-2mXn6&_nc_ht=scontent.fktm17-1.fna&oh=00_AfCIgY1OuqHBZdp8xAI3GpopT7CEifVEL1lYsSuLthVxYg&oe=63767F35"
        name="Sailesh Rokaya"
        title="CEO & Founder"
        description="Hello, I'am Sailesh Rokaya origranlly from bansgadhi Bardiya. Now i lives in Kathamndu Nepal."
      />
      <ProfileCard
        image="https://scontent.fktm17-1.fna.fbcdn.net/v/t1.6435-9/168005520_1426768594344964_1311131796353406429_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=xO7Cheg5l0cAX9FNUb7&tn=zSla4XmZD0BiTgav&_nc_ht=scontent.fktm17-1.fna&oh=00_AfDZJF_tAUQyuk8D-Oa7sEtOEHqavspZTSw6SPuROeFpcQ&oe=63992A38"
        name="Ram Kumar Mahato"
        title="Senior Development"
        description="Hello, I'am Ram Kumar Mahato origranlly from Birgunj. Now i lives in Kathamndu Nepal."
      />
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
