import { useEffect, useState } from 'react'
import axios from 'axios'
import useTodos from './hooks/useTodos'

function DataFetching() {
    const {todos,loading} = useTodos(5)
  

  return (
    <>
      {loading ? <div>loading....</div> : todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default DataFetching