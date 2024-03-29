import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About,Home,Contact, User, Github } from './components'
import { githubLoadData } from './components/Github/Github'


import './index.css'
import Layout from './Layout'

// const router = createBrowserRouter([
//   {
//     // this slash is the entry point for end points 
//     path:"/", 
//     element:<Layout />,
//     // here children  shows that Home and about component will be render inside the Layout component

//     children: [
//       {path:"",element:<Home/>},{path:"about", element:<About />},{path:"contact", element:<Contact />}
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    // here Layout is root component which has etnry point started by slash
    // inside layOut there are Home,About,Contact Component lies
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='user/:userId' element={<User/>}/>
      {/* here loader will call the function already and cached it when we go to github. it is used in mostly in api calls   */}
      <Route loader={githubLoadData} path='github' element={<Github />}/>
   
     
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
