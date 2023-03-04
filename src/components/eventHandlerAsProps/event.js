function Button({ onSmash, children }) {
  return (
    // onClick trigger  the handleCLick function then alert will be execute
    // children will render the content between Button jsx tag whihch is play "{movieName}"
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      <div>{children}</div>
    </button>
  );
}

function UploadButton() {
  return (
    <div>
      <Button
        onSmash={() => {
          alert("image uploading");
        }}
      >
        upload image
      </Button>
    </div>
  );
}

export function PlayButton({ movieName }) {
  function handleClick() {
    alert(`playing ${movieName}`);
  }
  return (
    <div onClick={() => alert("oh hi there what is happening")}>
      <h1>
        ------------example of pasing eventHandlers as props given
        below----------------------
      </h1>
      <br></br>
      {/* here we are passing "handleClick" eventHandler  as a prop */}
      <Button onSmash={handleClick}>play "{movieName}"</Button>
      <UploadButton />
    </div>
  );
}
