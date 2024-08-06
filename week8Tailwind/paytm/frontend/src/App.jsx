import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));

const SendMoney = lazy(() => import("./components/SendMoney"));
const DashBoard = lazy(() => import("./components/Dashboard"));
const AppBar = lazy(() => import("./components/AppBar"));
import {
  RecoilRoot,
} from "recoil";
import PaymentConfirmation from "./components/PaymentConfirmation";

function App() {
  return (
    <RecoilRoot>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={"loading...."}>
                  <Signup />
                </Suspense>
              }
            />
            <Route
              path="/signin"
              element={
                <Suspense fallback={"loading...."}>
                  <Login />
                </Suspense>
              }
            />{" "}
            {/* Uncomment if needed */}
            <Route path="/dashboard" element={<DashBoard />} />
            <Route
              path="/sendmoney"
              element={
                <Suspense fallback={"loading...."}>
                  <SendMoney />
                </Suspense>
              }
            />
            <Route
              path="/success"
              element={
                <Suspense fallback={"loading...."}>
                  <PaymentConfirmation />
                </Suspense>
              }
            />
            <Route path="/appbar" element={<AppBar />} />
          </Routes>
        </BrowserRouter>
        {/* Consider moving "Hello world" inside a Route or component */}
      </div>
    </RecoilRoot>
  );
}

export default App;
