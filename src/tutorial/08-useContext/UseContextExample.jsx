import React from 'react'
import { DisplayAge,DisplayName } from './DisPlayInfo'
export const objectContext = React.createContext()

export const UseContextExample = () => {
   
    const newObj = {name:"Deepak", age:25}
  return (
    <div>
        UseContextExample

         {/* here we are wrapping each compnent via objectContext Provider  
         
         
         every value passed in provider will be transfferd 
         to each component inside the provider} to use value in each compnet we need to pass 
         objectContext in usecontext hook as params*/}

        <objectContext.Provider value={newObj}>
            <DisplayName />
            <DisplayAge />

        </objectContext.Provider>
    </div>
  )
}




