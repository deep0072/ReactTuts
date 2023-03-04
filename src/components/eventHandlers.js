export function Toolbar({ onPLay, onUpload }) {
  return (
    <div>
      <button onClick={onPLay}>play</button>
      <button onClick={onUpload}>upload</button>
    </div>
  );
}
