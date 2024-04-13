import React from 'react'
import useCustomHook from './hooks/customHook'

const CustomHook = () => {
    const todos = useCustomHook()
    console.log(todos, "todos")
  return (
    <div>CustomHook
        {todos.map(todo=> <h1>{todo.title}</h1>)}
    </div>
  )
}

export default CustomHook