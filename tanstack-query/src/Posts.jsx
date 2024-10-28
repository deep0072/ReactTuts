import { useQuery, useQueryClient } from "@tanstack/react-query"

async function fetchData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts/")
      const response = await data.json()
      console.log(response)
      return response
    
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

const Posts = ()=>{


    // now right your query 
    // first key queryKey that is just name we are given to ours query
    // second key is fn that we are shoving to tanstack query which call this function
    // and handle all error, whether its fetching or not 
    // it will handle all scenario by default
    const {data,isLoading,error} = useQuery({queryKey:['postsss'], queryFn:fetchData})
    if (error){
        return <div>error while fetching</div>
    }
    if (isLoading){
        return <div>loading...</div>
    }

    return <div>
        {data.map(post => (<div> {post.body} </div>))}
    </div>
} 

export default Posts