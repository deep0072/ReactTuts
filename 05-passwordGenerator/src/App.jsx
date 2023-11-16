import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [allowedCharacter, setAllowedCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const copyToClipBoard = useCallback(() => {
    passwordRef.current.select()

    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 

    if (numberAllowed) str += "1234567890";
    if (allowedCharacter) str += "!@#$%^&*()_+-=<>/?:;~";

    for (let index = 0; index < length; index++) {
      // this wil give the random index of string
      const char = Math.floor(Math.random() * str.length + 1);
      // then pick the character of string with help of random index we got
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numberAllowed, allowedCharacter, setPassword, length]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, allowedCharacter, setPassword, length]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex-shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              onChange={(e) => setLength(e.target.value)}
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedCharacter}
              id="characterInput"
              onChange={() => setAllowedCharacter(!allowedCharacter)}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
