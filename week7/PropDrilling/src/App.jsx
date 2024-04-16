import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
        <Count /> 
        {/* here count will automatically get the access of count and setCount */}
        {/* and the child of count also have access of this  */}
      
      </CountContext.Provider>
    </div>
  )
}

export default App


function Count(){

  return <div>
    <CountRenderer />
    <Buttons  />
    </div>


}

function CountRenderer({}){
  const {count} = useContext(CountContext) // it will grab the props passed by provider itself
  return <div>{count}</div>
}

function Buttons(){
  const {count,setCount} = useContext(CountContext) // it will grab the props passed by provider itself
  return <div>
    <button onClick={()=>{setCount(count+1)}}>increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>

}