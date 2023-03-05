import { useState } from "react";
import { sculptureList } from "./data";

export function Gallery() {
  // useState always has exactly two items thats why we used array destructuring
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;
  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function handlePrevClick() {
    if (hasPrev) setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let item = sculptureList[index];

  return (
    <div>
      <h1>-----state memory examples are given below-------</h1>
      <button onClick={handleClick} disabled={!hasNext}>
        next
      </button>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>

      <img src={item.url} alt={item.name}></img>

      <h1>{item.name}</h1>
      <h2>{item.artist}</h2>
      <h3>
        {index+1} of {sculptureList.length}
      </h3>
      <button onClick={handleMoreClick}>{showMore ? "Hide" : "Details"}</button>
      {showMore && <p>{item.description}</p>}
    </div>
  );
}
