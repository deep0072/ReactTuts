import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React with Deepak</h1>
      <UserContextProvider >
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
