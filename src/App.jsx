

import './App.css'
import ExampleError  from './tutorial/01-usestate/ExampleError'
import UseStateBasics from './tutorial/01-usestate/ExampleBasics'
import { UseStateArray } from './tutorial/01-usestate/UseStateArray'
import { UseStateWithObjects } from './tutorial/01-usestate/UseStateObjects'
import { ExampleUseEffect } from './tutorial/02-useEffect/ExampleUseEffect'
import { ExampleUseEffectApi } from './tutorial/02-useEffect/exampleUseEffectApi'
import { MultipleReturnsUseEffect } from './tutorial/02-useEffect/MultipleReturnsUseEffect'
import TernaryOperator from './tutorial/03-conditional/Ternary'
import ToggleChallenge from './tutorial/03-conditional/ToggleChallenge'


function App() {


  return (
    <>
    <h1>vite react </h1>
    {/* <ExampleError />
    <UseStateBasics />
    <UseStateArray /> */}
    {/* <UseStateWithObjects /> */}
    {/* <ExampleUseEffect />
    <ExampleUseEffectApi /> */}
    <MultipleReturnsUseEffect/>
    <TernaryOperator />
    <ToggleChallenge />
      
    </>
  )
}

export default App
