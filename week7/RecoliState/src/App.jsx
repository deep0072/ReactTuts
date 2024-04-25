import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue,useRecoilState,RecoilRoot,useSetRecoilState } from 'recoil'
import { countAtom, renderEven } from './store/atoms/count'

function App() {
 

  return (
    <div>
       <RecoilRoot> 
      <Count />
      </RecoilRoot>
      
    </div>
  )
}

export default App


function Count() {
  console.log("Count Rerendering....")
  return <div>
    {/* RecoilRoot==> is wrapper will used around those component which uses recoil logic */}
   
      <CountRenderer  />
      <Buttons />
   
  </div>
}


function CountRenderer() {
  const count=useRecoilValue(countAtom) // this will give get the atom value
 
  console.log("renderingggg")
  return <div>
    <IsEven />
    <br />
    {count}
  </div>
}

function IsEven(){
  const even = useRecoilValue(renderEven) // get value from selector

  return <div>
      {even && even}
  </div>

}

function Buttons(){
  
  // const [count,setCount]=useRecoilState(countAtom) // this will provide the current value and setStatefunction
  const setCount =useSetRecoilState(countAtom) // this will provide  function that update the current value. 
  console.log("Rerendering.......")
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>increase</button>
    <button onClick={()=>setCount(count=>count-1)}>decrease</button>
  </div>
}

