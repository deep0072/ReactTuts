import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { todoAtomFamily } from './atom'
// EXAMPLE FOR atomFamily----------------------------------------------------


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <RecoilRoot>
//       <Todo id={1} />
//       <Todo id={2} />
//       <Todo id={2} />
//       <Todo id={2} />
//       <Todo id={2} />
//     </RecoilRoot>
//   )
// }

// export default App


// function Todo({id}){
//   const [todo,setTodo] = useRecoilState(todoAtomFamily(id))

//   return <div>
//     {todo?.title}
//     <br />
//     {todo.description}
//   </div>
// }

// ------------------------------------------------example for selectorFamily------

// as selectorFamily mostly used to hit backend calls. 
// so it caches the result if input are same

// as we are rendering  <Todo id={2} /> multiple time then it does not mean it will hiting backend 
// multiple times. it caches the result by default. so it don't need to call api


function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  )
}

export default App


function Todo({id}){
  const [todo,setTodo] = useRecoilState(todoAtomFamily(id))

  return <div>
    {todo?.title}
    <br />
    {todo.description}
  </div>
}