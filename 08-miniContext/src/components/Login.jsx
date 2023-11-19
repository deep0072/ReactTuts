import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext) // get the all data via useContext
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        setUser({userName,password})
        
    }
    
  return (
    <div>
        <input type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login