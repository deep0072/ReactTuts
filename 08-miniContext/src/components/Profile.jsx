import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const{user} = useContext(UserContext)
    console.log(user.userName)
  return (
    <>
    {user ?  <h1>Profile of {user.userName}</h1>: <h1>please login</h1>}
    </>
    
  )
}

export default Profile