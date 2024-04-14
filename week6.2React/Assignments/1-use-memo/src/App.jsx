import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment1 from './components/Assignment1'
import Assignment2 from './components/Assignment2'
import Assignment3 from './components/Assignment3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>setCount(count+1)} >{count}</button>
    {/* <Assignment1 /> */}
    {/* <Assignment2 /> */}
    <Assignment3 />
    </div>
  )
}

export default App
