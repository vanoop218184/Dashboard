import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectData = async () => {
    let result = await fetch("http://localhost:8000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-11/12 flex flex-col items-center font-serif m-3 p-3">
        <h1 className="font-bold underline m-2">Register</h1>
        <form className="flex flex-col border-2 border-slate-500 p-3">
          <div className="space-y-3 m-2">
            <div className="flex flex-col font-bold">
              <label htmlFor="name">Enter Name:</label>
              <input
                type="text"
                value={name}
                id="name"
                placeholder="Enter Your Name"
                required
                className="border-2 border-gray-300 p-1"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col font-bold">
              <label htmlFor="email">Enter Your Email:</label>
              <input
                type="email"
                value={email}
                id="email"
                required
                placeholder="Enter Your Email"
                className="border-2 border-gray-300 p-1"
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col font-bold">
              <label htmlFor="password">Enter Your Password:</label>
              <input
                type="password"
                value={password}
                id="password"
                required
                placeholder="Enter Your Password"
                className="border-2 border-gray-300 p-1"
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
              />
            </div>
          </div>
           <div className="flex justify-center">
           <button
            className="w-1/2 bg-green-500 hover:scale-105 hover:bg-green-700 text-white p-2 mt-3"
            type="button"
            onClick={collectData}
          >
            Sign Up
          </button>
           </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
