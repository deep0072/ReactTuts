import { useState,Component, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetching from './DataFetching'
import useOnline from './hooks/use-online'
import useMousePointer from './hooks/use-mouse-pointer'
import useDimension from './hooks/use-dimension'
import useInterval from './hooks/use-interval'
import useDebounce from './hooks/use-debounce'

function App() {
  // const [render,setRender] = useState(true)
  // const isOnline = useOnline()
  // const position = useMousePointer()
  // console.log(isOnline, "isOnline")
  // const [count ,setCount] = useState(0)
  const [input ,setInput] = useState("")
  // const dimension = useDimension()
  const debounceVal = useDebounce(input,500)
  console.log(debounceVal)






 useEffect(()=>{
  fetch("")

 },[debounceVal])

  return (
    <>
    
    {/* { render ? <MyComponent /> : <div></div>} */}
    

    {/* <DataFetching /> */}
    {/* {isOnline ? <div>ye you are online</div>: <div>oops you are offline</div>} */}

    {/* {dimension.width},{dimension.height} */}
   


    <input type="text" onChange={(e)=>setInput(e.target.value)} />
    <br />

    {debounceVal} 

    </>
    
  )
}

export default App


function MyComponent(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("component mounted")
    return ()=>{
      console.log("component unmounted") // it will call only when useEffect about to be unmounted
    }
  },[])

  return <>
     
     
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    
  </div>

</>

}

// class MyComponent extends Component {
//   constructor(props){
//     super(props)

//     this.state = {count:0}


//   }

//   incrementCount = ()=>{
//     this.setState({count:this.state.count+=1})
//   }


//   render (){
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>incrementCount</button>
//       </div>
//     )
//   }
// }