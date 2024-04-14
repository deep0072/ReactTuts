import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment1 from './components/Assignment1'
import Assignment2 from './components/Assignment2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Assignment1 /> */}
      <Assignment2 />
        
    </div>
  )
}

export default App
