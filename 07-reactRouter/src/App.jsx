import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header />
      <Home/>
      <Footer />
    <h1 className='bg-green-600'>React Router</h1>
    </div>
  )
}

export default App
