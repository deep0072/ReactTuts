import React from 'react'

export const WithoutUseContextApi = () => {
   const name = {name:"Deepak", age:25}
  return (
    <div>
        WithoutUseContextApi
        {/* // here we are trying to passing props to mulitple components */}
        <DisplayName name={name.name} /> 
        <DisplayAge name={name} />
    </div>
  )
}




const DisplayName = (props)=>{
    return <h1>hi {props.name}!</h1>
}
const DisplayAge = (props)=>{
    return <h1>hi {props.name.name} yours age is {props.name.age}!</h1>
}
