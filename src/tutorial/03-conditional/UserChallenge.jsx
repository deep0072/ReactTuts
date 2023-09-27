// create button login 
// when we click on login a name will be shown on screen and also logout button 
// so when click on logout button then name will be disappear with logout btn and login button will be appear

import { useEffect, useState } from "react"

const UserChallenge = () => {
    const[user,setUser] = useState(true)
   

    function login() {
        setUser("deepak")
        
        
    }

    function logout(){
        setUser(null)
    }
  
  return (
    <div>
        UserChallenge
        
    <br></br>
    {user ? <div>

     <h4> hi there {user} you are logged in</h4>
    <button className="btn" onClick={logout}>logout</button>
    
    </div>:
    <button className="btn" onClick={login}>login</button>
    }

    </div>

  )
}

export default UserChallenge


const ShowUser = ({myuser})=>{
    
   
    return (<><h4>hi {myuser} you are logged in </h4></>)

}