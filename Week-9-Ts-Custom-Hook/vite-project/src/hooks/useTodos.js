import axios from "axios";
import { useEffect, useState } from "react";

function useTodos(n) {
    const[todos, setTodos] = useState([])
    const[loading, setLoading] = useState(true)
    function getData(){
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res=>{
            setTodos(res.data.todos)
            setLoading(false)
        })
    }

    useEffect(()=> {
        const value  = setInterval(()=>{
            getData()

        },n *1000)
        getData()
        

        // this is cleanup function
        // this will run first wheneven depency array changes
        // it means it will first clear the existing interval and then new interval will start
        return ()=>{
            clearInterval(value)
        }
    },[n])

    return {todos,loading}
}

export default useTodos