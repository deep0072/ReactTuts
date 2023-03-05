import { useState } from "react";
import { sculptureList } from "./data";

export function Gallery() {
  // useState always has exactly two items thats why we used array destructuring
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }

  let item = sculptureList[index];

  return (
    <div>
      <h1>-----state memory example given below-------</h1>
      <button onClick={handleClick}>next</button>

      <img src={item.url} alt={item.name}></img>

      <h1>{item.name}</h1>
      <h2>{item.artist}</h2>
      <h3>{item.description}</h3>
    </div>
  );
}
