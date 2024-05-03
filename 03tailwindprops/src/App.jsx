import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-900 text-white rounded-md p-2'>Tailwind Css</h1>
      <Card username="Tanoy" btn="Contact Me"/>
      <Card username="She" btn="Visit Profile"/>
    </>
  )
}

export default App
