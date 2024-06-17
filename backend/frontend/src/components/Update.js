import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Update= () => {
  const navigate=useNavigate();
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const params =useParams();
    useEffect(()=>{
        getProductDetails();
        
     },[]);
    const getProductDetails= async()=>{
        console.log(params);
        let result= await fetch(`http://localhost:8000/product/${params.id}`);
         result=await  result.json();
         console.warn(result);
         setName(result.name)
         setPrice(result.price)
         setCategory(result.category)
         setCompany(result.company)
         }
 
   
    const updateProduct=async()=>{
        let result= await fetch(`http://localhost:8000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result=await result.json()
        navigate('/');
    }
  return (
  <>
    <div className='flex justify-center font-bold'>
        <div className="w-11/12 flex flex-col items-center font-serif m-3 p-3">
        <h1 className="font-bold underline m-2">Update Product </h1>
          <form className="flex flex-col border-2 border-slate-500 p-3 m-2 w-2/4">
            <label htmlFor="name">Enter Prodcut Name</label>
            <input
              type="name"
              placeholder="enter Product Name"
              id="name"
              name={name}
              value={name}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setName(e.target.value)}
              required
            ></input>
            <label htmlFor="price">Enter product Price</label>
            <input
              type="price"
              placeholder="Enter Price"
              id="price"
              name={price}
              value={price}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setPrice(e.target.value)}
              required
            ></input>
             <label htmlFor="category">Enter Product Category</label>
            <input
              type="category"
              placeholder="Enter Category"
              id="category"
              name={category}
              className="border-2 border-gray-300 p-1"
              onChange={(e)=>setCategory(e.target.value)}
              value={category}
              required
            ></input>
             <label htmlFor="company">Enter Product Company</label>
            <input
              type="company"
              placeholder="Enter Company"
              id="company"
              name={company}
              className="border-2 border-gray-300 p-1"
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              required
            ></input>
            <div className="flex justify-center">
            <button
              onClick={updateProduct}
              className=" w-1/2  hover:scale-105  hover:bg-green-700 bg-green-500 text-white p-2 mt-3"
              type="button"
            >
              Update Product
            </button>
            </div>
           
          </form>
        </div>
    </div>
  </>
  )
}

export default Update;