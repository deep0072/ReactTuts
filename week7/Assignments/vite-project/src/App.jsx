import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackGroundChanger from './BackGroundChanger'
import CustomReact from './CustomReact'
import ParaGenerator from './ParaGenerator'
import OtpLogin from './OtpLogin'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <div>
      <OtpLogin />
      {/* <ParaGenerator /> */}
      {/* <CustomReact /> */}
      {/* <BackGroundChanger /> */}
    </div>
  )
}

export default App
