import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import AppBar from './AppBar'
import { mytokenAtom } from './atom'
import { Balance } from './Balance'
import { Users } from './Users'

const Dashboard = () => {

  const tokenAtom = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(()=>{
    !tokenAtom && navigate("/signin")

  }, [tokenAtom])

  
  return <div>
     {tokenAtom && <div>
    <AppBar />
    <div className='m-8'>
      <Balance value={"10000"}/>
      <Users />
    </div>
  </div> }

  </div> 
   
    
  
}

export default Dashboard