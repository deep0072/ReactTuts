import React, { useState } from 'react'

const MultipleInputs = () => {

  const [users,setUsers] = useState({name:"", email:"", password:""})
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(users)


  }
  const handleChange = (e) =>{
    console.log(e.target.name)
    setUsers({...users, [e.target.name]:e.target.value})
 

  }
 
  return (
    <div>
    MultipleInputs
    <form className='form' onSubmit={handleSubmit}>
     <div className='form-row'>
      
      <label htmlFor="name" className='form-label'>name</label>
      <input type="text" value={users.name} name="name" onChange={handleChange}/>
     
      
      </div>  
     <div className='form-row'>
      

      <label htmlFor="email" className='form-label'>email</label>
      <input type="email" value={users.email} name="email" onChange={handleChange} />
    
      
      </div>  
     <div className='form-row'>
      
   
      <label htmlFor="name" className='form-label'>password</label>
      <input type="password" value={users.password} name="password"  onChange={handleChange}/>
    
      
      </div> 

        <button className='btn btn-block'>submit</button> 

        <h4>users</h4>
        {Object.keys(users).map((item,i)=>{
          console.log(users[item])
          return <div>

            <h4>{users[item]}</h4>
            <h4>{users[item]}</h4>
          </div>
        })}
      
    </form>  
  </div>
  )
}

export default MultipleInputs