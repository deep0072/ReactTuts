function Button({ onClick, children }) {
  return (
    // onClick trigger  the handleCLick function then alert will be execute
    // children will render the content between Button jsx tag whihch is play "{movieName}"
    <button onClick={onClick}>
      <div>{children}</div>
    </button>
  );
}

export function PlayButton({ movieName }) {
  function handleClick() {
    alert(`playing ${movieName}`);
  }
  return (
    <div>
      <h1>
        ------------example of pasing eventHandlers as props given
        below----------------------
      </h1>
      <br></br>
      {/* here we are passing "handleClick" eventHandler  as a prop */}
      <Button onClick={handleClick}>play "{movieName}"</Button>
    </div>
  );
}
