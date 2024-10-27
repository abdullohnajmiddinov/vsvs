import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Saidbar from './components/Saidbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <div className='flex flex-col items-center bg-gray-200 min-h-screen'>
        <Navbar />


        <div className="flex w-full">
          <Saidbar />
        <Outlet/>
        </div>
        
      </div>

    </>
  )
}

export default App
