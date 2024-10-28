// this without using tanstack query  

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect, useState, } from "react"
import Posts from "./Posts"

// function App() {
//   const [posts, setPosts] = useState([])

//   async function fetchData() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
//       const json = await response.json()
//       console.log(json)
//       setPosts(json)
//     } catch (error) {
//       console.error("Error fetching data:", error)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <>
//       {posts.map(post => (
//         <div key={post.id}>{post.title}</div> // Render post title
//       ))}
//     </>
//   )
// }

// export default App


// with the help of tanstack query we do not need to maintain state, no need to use any useEffect 
// with the help of tanstack query we can handle error, refetch data, 



// first intialise the QueryClient 

const queryClient =  new QueryClient()
// first get the function that fetch the data



// create provider 





function App() {
  

  return (

    <QueryClientProvider client={queryClient}>
    <>

      
        <Posts />
    </>
    </QueryClientProvider>
  )
}

export default App
