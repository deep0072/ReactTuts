import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    console.log(data,"data")
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/deep0072')
    //     .then((resp)=>resp.json())
    //     .then((data)=>{
    //         console.log(data)
         
    //         setData(data)})
    // }
  

    // ,[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default Github

export const githubLoadData = async()=>{
    const response = await fetch('https://api.github.com/users/deep0072')
    return response.json()

}