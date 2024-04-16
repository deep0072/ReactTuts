import React, { createContext } from 'react'

export const CountContext = createContext({count:0,setCount:()=>count})