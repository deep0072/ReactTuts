import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilStateLoadable } from "recoil";
import { todoAtomFamily } from "./atom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RecoilRoot>
        <Todo id={1} /> 
      </RecoilRoot>
    </div>
  );
}

export default App;

function Todo({ id }) {
  // useRecoilStateLoadable is used when state reading and updating takes tims. so it shows current state
  // as om atom family default value we paused for 3 seconds. so in this 3 seconds state will be shown as loading
  const [todo, setTodo] = useRecoilStateLoadable(todoAtomFamily(id));
  if (todo.state === "loading") {
    return <div>loading.. please wait</div>;
  } else if (todo.state === "hasValue"){
    
    return (
      <div>
        {todo.contents.title}
        {todo.contents.description}
      </div>
    );

  }else if (todo.state==="hasError"){
    return <div>
      backend has some error...
    </div>
  }
  
    
 
}
