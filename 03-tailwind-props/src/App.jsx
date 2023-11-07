import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const username="Deepak"

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwindcss</h1>
      <Card username={username} btnText="visit me"/>
      <Card username="puneet" btnText="click me"/>
      
    </>
  );
}

export default App;
