function handleClick() {
  alert("ok then");
}

export function Button({message}) {
  return (
    <div>
      <button onClick={()=> alert(message)}>click me</button>
    </div>
  );
}
