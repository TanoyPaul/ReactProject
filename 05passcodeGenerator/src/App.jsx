import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Done till 33:33 minutes !

function App() {
  const [length, setLength] = useState(8); // length of passcode
  const [numberAllowed, setNumberAllowed] = useState(false); // fpr mumber passcode
  const [charAllowed, setCharAllowed] = useState(false); // for character passcode
  const [passcode, setPasscode] = useState("");

  // useRef hook

  const passcodeRef = useRef(null);

  const copyPasscodeToClipBoard = useCallback(
    () => {
      passcodeRef.current?.select();
      passcodeRef.current?.setSelectionRange(0,20);
      window.navigator.clipboard.writeText(passcode);
    }, [passcode]
  )

  const passcodeGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed){
        str += "0123456789";
      }
      if(charAllowed){
        str += "#^*&$()"; 
      }

      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPasscode(pass);
    } , [length, numberAllowed, charAllowed, setPasscode]
  )

  // When there is a change, whether it's minor change, run the methods again -->>

  useEffect(
    () => {passcodeGenerator()}, [length, numberAllowed, charAllowed, passcodeGenerator]
   )


  return (
    <>
      <div className=' w-full max-w-lg bg-gray-700 mx-auto shadow-md rounded-lg py-2 my-8 text-orange-400'>
        Passcode Generator
        
          <div  className='max-w-md  bg-white mx-auto shadow-md rounded-lg py-3  text-orange-400 overflow-hidden m-4'>
              <input
                type='search'
                value={passcode}
                className='outline-none w-full mx-4'
                placeholder='passcode'
                readOnly
                ref={passcodeRef}
              />   
          </div>
         
          <button onClick={copyPasscodeToClipBoard}  className='mb-2 rounded-md  outline-none bg-blue-600 hover:bg-blue-800 text-white px-5 py-1 shrink-0'>
                  Copy
          </button>
          

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-2 px-4 py-3'>
                <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(event) => {setLength(event.target.value)}} />
                <label>Length: {length}</label>
            </div>


            <div className='flex items-center gap-x-2 px-4'>
           <input type='checkbox' defaultChecked = {numberAllowed} id='numberInput' onChange={() => {
            setNumberAllowed(
              (prev) => !prev
            );
           }} />   
            <label htmlFor='numberInput'>Numbers</label>
           </div>

           <div className='flex items-center gap-x-2 px-4'>
           <input type='checkbox' defaultChecked = {charAllowed} id='charInput' onChange={() => {
            setCharAllowed(
              (prev) => !prev
            );
           }} />   
           <label htmlFor='charInput'>Characters</label>
           </div>
             
          </div>

      </div>
    </>
  )
}

export default App
