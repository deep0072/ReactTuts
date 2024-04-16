import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import DashBoard from "./components/DashBoard";
// import Landing from "./components/Landing";

// here lazy laoding will load the code of dashboard only when user click on Dashboard or on Landing button
const DashBoard  =  lazy(()=> import("./components/DashBoard")) 
const Landing  =  lazy(()=>import("./components/Landing")) 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading-----------------------------------------------------------------------------------------------..."}><DashBoard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function AppBar() {
  const navigate = useNavigate(); // this should be inside the BrowerRouter
  return (
    <div style={{ background: "black" }}>
      top navbar is fixed
      <div style={{ display: "flex", justifyItems: "space-between" }}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          lending page
        </button>

        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          dashboard page
        </button>
      </div>
    </div>
  );
}
