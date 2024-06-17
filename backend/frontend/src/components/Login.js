import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const naviagte = useNavigate();
  const handleLogin = async() => {
    let data = await fetch(`${window.location.origin}/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-Type": "application/json",
      },
    });
    data=await data.json();
    console.log(data);
    if(data.name){
  localStorage.setItem("user",JSON.stringify(data));
  naviagte("/");
    }
    else{
        alert("please enter correct email or password");
    }
  };
  return (
    <>
      <div className="flex justify-center font-bold">
        <div className="w-11/12 flex flex-col items-center font-serif m-3 p-3">
          <h1 className="font-bold underline m-2">Login</h1>
          <form className="flex flex-col border-2 border-slate-500 p-3 m-2">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              placeholder="enter Email"
              id="email"
              value={email}
              className="border-2 border-gray-300 p-1"
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
              required
            ></input>
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              placeholder="enter Password"
              id="password"
              value={password}
              className="border-2 border-gray-300 p-1"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
              required
            ></input>
            <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className=" w-1/2  hover:scale-105  hover:bg-green-700 bg-green-500 text-white p-2 mt-3"
              type="button"
            >
              Login
            </button>
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
