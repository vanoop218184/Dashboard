import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
      <div className="flex justify-center sticky top-0 z-10">
        <div className="w-11/12 bg-blue-700 text-white p-3 mt-0 m-2 flex  justify-between items-center">
         <img alt="ecoomerce"
         className="w-[50px] h-[50px] rounded-full float-left"
         src="https://tse2.mm.bing.net/th?id=OIP.ajHR9Viocw1TiSg3cr6VmwHaD4&pid=Api&P=0&h=180"></img>
       
          {auth?<div className=" space-x-3">
              <Link className="font-serif hover:text-black" to="/">Products</Link>
              <Link className="font-serif hover:text-black" to="/add">Add Product</Link>
              {/* <Link className="font-serif hover:text-black" to="/update/:id">Update product</Link> */}
              <Link className="font-serif hover:text-black" to="/profile">Profile</Link>
              <Link onClick={logout} className="font-serif hover:text-black"to="/signup">Logout</Link>
           
            </div>:<div >
            <li className="flex justify-end  font-bold space-x-3">
            <Link className="font-serif hover:text-black" to="/signup">SignUp</Link>
            <Link className="font-serif hover:text-black" to="/login">Login</Link>
            </li>
            </div>}   
          
        </div>
      </div>
    </>
  );
};
export default Navbar;
