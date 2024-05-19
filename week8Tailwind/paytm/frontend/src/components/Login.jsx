import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { mytokenAtom } from "./atom";
import BottomWarning from "./BottomWarning";
import ButtonComponent from "./ButtonComponent";
import Header from "./Header";
import InputBox from "./InputBox";
import SubHeader from "./SubHeader";

const Login = () => {
  const [username,setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const setTokenAtom = useSetRecoilState(mytokenAtom)
  return (
    <div className="flex bg-slate-300 h-screen  justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
          <Header label="Login" />
          <SubHeader label={"Enter your information to login an account"} />

          <InputBox onChange={(e)=>setUserName(e.target.value)} label="Email" placeholder="xyz@mail.com" />
          <InputBox onChange={(e)=>setPassword(e.target.value)} label="Password" placeholder="*****" />
          <ButtonComponent onClick={async ()=>{
            const response =  await axios.post("http://localhost:3000/api/v1/user/signin",
           {
              username,
              password

            }
            
            
            
            )
           
            localStorage.setItem("token", response.data.token)
            setTokenAtom(true)
            navigate("/dashboard")

          }} label={"Login"} />
          <BottomWarning
            label={"if you dont have any account ?"}
            buttonText={"Sign up"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
