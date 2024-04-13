import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UseMemo from "./UseMemo";
import UseCallBack from "./UseCallBack";
import Memo from "./Memo";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (e) =>{
    console.log(e)
    setCounter(e.target.value)

  }

  return (
    <div>
      {/* <Memo /> */}
      <UseCallBack />
      {/* <UseMemo /> */}
      {/* {counter}
      <button onClick={handleClick}>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button onClick={() => setCounter(counter + 1)}>counter</button>
      <Todo count={counter} />; */}
    </div>
  );
}

function Todo({ count }) {
  const [todo, setTodos] = useState({});
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${count}`)
      .then((res) => {
        setTodos(res.data.todo);
        console.log(res.data.todo)
      });
  }, [count]);
  return (
    <div>
         <h1>{todo?.title}</h1>
    </div>
  );
}
