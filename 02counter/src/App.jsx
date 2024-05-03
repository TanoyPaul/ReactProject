import { useState } from 'react'
import './App.css'

function App(){
  
  let [counter, setCounter] = useState(0);
// setCounter will contro counter
  const addValue = () => {
    counter = ((prevCounter) => prevCounter + 1); // React interview question:  increase by 3 when button is clicked by internal promise of react .
    counter = ((prevCounter) => prevCounter + 1); // it could be done as follows also: counter = counter + 3; but not the answed that we wanted . 
    counter = ((prevCounter) => prevCounter + 1);
    setCounter(counter); 
    setCounter(counter);
    setCounter(counter);
    /*
    Or simply: 
    setCounter((prevCounter) => prevCounter + 1));  *  3 times
    */
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
      <footer><button onClick={addValue}>! {counter}</button></footer>
    </>
  )
}
 


export default App
