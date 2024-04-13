import { useEffect, useState } from "react";
import axios from "axios";

export default function useCustomHook() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then(function (res) {
      setTodos(res.data.todos);
    });
  }, []);

  console.log(todos)

  return todos;
}
