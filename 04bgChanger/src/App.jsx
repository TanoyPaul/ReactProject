import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#E5D4FF")

  return (
    <>
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color, display: 'flex', alignItems: 'center'}}
      >

      <div className='flex flex-wrap justify-center bottom-12 ml-8  inset-x-0 left-12  w-24 h-80'>
          <div className='flex flex-wrap align-middle gap-3 shadow-xl px-4 py-2 rounded-2xl bg-white '>
          <button className=' w-20 outline-none px-4 py-1 cursor-pointer shadow-lg rounded-xl text-white bg-red-600' onClick={() => setColor("red")}>Red</button>
          <button className='w-20 outline-none px-4 py-1 cursor-pointer shadow-lg rounded-xl text-white bg-yellow-300' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='w-20 outline-none px-4 py-1 cursor-pointer shadow-lg rounded-xl text-white bg-blue-600' onClick={() => setColor("blue")}>Blue</button>
          <button className='w-20 outline-none px-4 py-1 cursor-pointer shadow-lg rounded-xl text-white bg-green-600' onClick={() => setColor("green")}>Green</button>
          <button className='w-20 outline-none px-4 py-1 cursor-pointer shadow-lg rounded-xl text-white bg-purple-800' onClick={() => setColor("purple")}>Purple</button>
          <button className='w-20 outline-none px-4 py-1 cursor-pointer shadow-lg rounded-xl text-white bg-cyan-600' onClick={() => setColor("cyan")}>Cyan</button>
          </div>  
      </div>
      </div>
    </>
  )
  
}

export default App
