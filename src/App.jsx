

import './App.css'
import ExampleError  from './tutorial/01-usestate/ExampleError'
import UseStateBasics from './tutorial/01-usestate/ExampleBasics'
import { UseStateArray } from './tutorial/01-usestate/UseStateArray'
import { UseStateWithObjects } from './tutorial/01-usestate/UseStateObjects'
import { ExampleUseEffect } from './tutorial/02-useEffect/ExampleUseEffect'
import { ExampleUseEffectApi } from './tutorial/02-useEffect/exampleUseEffectApi'


function App() {


  return (
    <>
    <h1>vite react </h1>
    {/* <ExampleError />
    <UseStateBasics />
    <UseStateArray /> */}
    {/* <UseStateWithObjects /> */}
    <ExampleUseEffect />
    <ExampleUseEffectApi />
      
    </>
  )
}

export default App
