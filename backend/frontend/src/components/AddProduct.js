import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate=useNavigate();
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error,setError]=useState(false);
    const addProduct=async()=>{

      if(!name || !price || !category || !company)
      {
        setError(true);
        return false;
      }
        let userId=JSON.parse(localStorage.getItem('user'))._id;
        let res=await fetch(`${window.location.origin}/addproduct`,{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                "content-Type":"application/json"
            }

        });
        res=await res.json();
        console.log(res);
        navigate("/");
    }
  return (
  <>
    <div className='flex justify-center font-bold'>
        <div className="w-11/12 flex flex-col items-center font-serif m-3 p-3">
        <h1 className="font-bold underline m-2">Add Product </h1>
          <form className="flex flex-col border-2 border-slate-500 p-3 m-2 w-2/4">
            <label htmlFor="name">Enter Prodcut Name</label>
            <input
              type="name"
              placeholder="enter Product Name"
              id="name"
              value={name}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setName(e.target.value)}
              required
            ></input>
            {error&&!name?<span className='text-red-500 font-normal text-sm'>Enter valid Product Name</span>:null}
            <label htmlFor="price">Enter product Price</label>
            <input
              type="price"
              placeholder="Enter Price"
              id="price"
              value={price}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setPrice(e.target.value)}
              required
            ></input>
            {error&&!price?<span className='text-red-500 font-normal text-sm'>Enter valid Price</span>:null}
             <label htmlFor="category">Enter Product Category</label>
            <input
              type="category"
              placeholder="Enter Category"
              id="category"
              value={category}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setCategory(e.target.value)}
              required
            ></input>
            {error&&!category?<span className='text-red-500 font-normal text-sm'>Enter valid Category</span>:null}
             <label htmlFor="company">Enter Product Company</label>
            <input
              type="company"
              placeholder="Enter Company"
              id="company"
              value={company}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setCompany(e.target.value)}
              required
            ></input>
            {error&&!company?<span className='text-red-500 font-normal text-sm'>Enter valid Company</span>:null}
            <div className="flex justify-center">
            <button
              onClick={addProduct}
              className=" w-1/2  hover:scale-105  hover:bg-green-700 bg-green-500 text-white p-2 mt-3"
              type="button"
            >
              Add Product
            </button>
            </div>
           
          </form>
        </div>
    </div>
  </>
  )
}

export default AddProduct
