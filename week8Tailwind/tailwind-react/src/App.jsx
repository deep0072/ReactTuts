import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './component/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (

    // in tailwind css space-between. the 'space' keyword will be replaced by 'justify'
    // <div className='flex justify-between'> 
    //   <div style={{background:"red"}}>first div</div>
    //   <div  style={{background:"green"}}>second div</div>
    //   <div style={{background:"yellow"}}>third div</div>
    //   <div style={{background:"yellow"}}>third div</div>
    //   <div style={{background:"yellow"}}>third div</div>
    //   <div style={{background:"yellow"}}>third div</div>
    //   <div style={{background:"yellow"}}>third div</div>
    //   <div style={{background:"yellow"}}>third div</div>
    // </div>

    // grid => mostly used to put div tag horizontally and vertically. also can decide which div tag will take 
    // area 

    // cols-10 here it means there could be 10 column
    // <div className='grid grid-cols-1 md:grid-cols-3'>
    //   {/* cols-span means how much each div tag will take space */}
    //   <div className='bg-red-500 '>red</div> 
    //   <div className='bg-green-500 '>green</div>
    //   <div className='bg-yellow-500 '>yellow</div>
      

    // </div>
    <div className='grid grid-cols-4'><RevenueCard title={"Amount Pending"} showWarning={""} amount={"92,312.20"} orderCount={13}/></div>

    
    
  )
}

export default App
