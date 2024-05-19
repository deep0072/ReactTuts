import React, { useState } from "react";
import BottomWarning from "./BottomWarning";
import ButtonComponent from "./ButtonComponent";
import Header from "./Header";
import InputBox from "./InputBox";
import SubHeader from "./SubHeader";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { mytokenAtom } from "./atom";

const Signup = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const setTokenAtom = useSetRecoilState(mytokenAtom)
  return (
    <div className="flex bg-slate-300 h-screen  justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
          <Header label="SignUp" />
          <SubHeader label={"Enter your information to create an account"}/>
          <InputBox onChange={(e)=>{
            setFirstName(e.target.value)
          }} label="First Name" placeholder="Deepak" />
          <InputBox onChange = {(e)=>{
            setLastName(e.target.value)

          }}label="Last Name" placeholder="Kumar" />
          <InputBox onChange={(e)=>{
            setUserName(e.target.value)

          }} label="Email" placeholder="xyz@mail.com" />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value)
          }} label="Password" placeholder="*****" />
          <ButtonComponent onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            })
            setTokenAtom(response.data.token)
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")

           

          }
         
          
          
          } label={"SignUp"} />
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
