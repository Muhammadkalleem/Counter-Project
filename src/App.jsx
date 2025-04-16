import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Initialize the state with useState
  const [counter, setCounter] = useState(12);

  // Function to increment the counter
  const addValue = () => {
     if(counter<20)
    setCounter(counter + 1); // Use the setter function to update state
  };

  // Function to decrement the counter
  const removeValue = () => {
     if(counter>0)
    setCounter(counter - 1); // Use the setter function to update state
  };

  return (
    <>
      <h1>Chai aro react</h1>
      <h2>Counter: {counter}</h2> {/* Display the counter */}
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
