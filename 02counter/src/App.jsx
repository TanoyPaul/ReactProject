import { useState } from 'react'
import './App.css'

function App(){
  
  let [counter, setCounter] = useState(0);
// setCounter will contro counter
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}
 


export default App
