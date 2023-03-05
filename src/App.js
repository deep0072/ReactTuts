import logo from "./logo.svg";
import "./App.css";

import { Profile } from "./components/profile.js";

import { ChildrenProp } from "./components/childrenProps";
import { PackingList } from "./components/conditionalRendering";
import { LogicalPackingList } from "./components/logicalANDoperator.js";
import { FunctionList } from "./components/mapping.js";
import { PureFunction } from "./components/pureComponents.js";
import { Button } from "./components/eventHandlers";
import { PlayButton } from "./components/eventHandlerAsProps/event";
import { Gallery } from "./components/states/render";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Profile />

      <ChildrenProp />
      <PackingList />
      <LogicalPackingList />
      <FunctionList />
      <PureFunction />
      <Button message={"oh hi"} />
      <PlayButton movieName={"swades"}></PlayButton>
      <Gallery />
    </div>
  );
}

export default App;
