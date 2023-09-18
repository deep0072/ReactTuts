import React, { useState } from 'react'
import {data} from "../data.jsx"


export const UseStateArray = () => {
  const [superHero, setSuperHero] = useState(data);
  const deleteData = (id)=>{
    
    const updateArray = superHero.filter((person,index)=>index !== id)
    setSuperHero(updateArray );
      
      
     
  }
  
  return (
    <div>
      UseStateArray
      {superHero.map((hero, id) => {
        return <>
        
        <h1 key={id}>{hero}</h1>
        <button onClick={()=>deleteData(id)}>{id}</button>
        
        
        </>

        
})}


    <button className='btn' onClick={()=>setSuperHero([])}>clear items</button>
    </div>
  );
}


