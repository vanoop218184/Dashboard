import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let res = await fetch("http://localhost:8000/products");
    res = await res.json();
    setProduct(res);
  };
  const delProduct= async(e)=>{
   let result = await fetch(`http://localhost:8000/product/${e}`,{
    method:"Delete"
   });
   result= await result.json();
   if(result)
   { alert("Product Deleted");
    getProducts();}

  }
  const searchHandle=async(event)=>{
    let key=event.target.value;
    if(key)
    {
        let result=await fetch(`http://localhost:8000/search/${key}`)
        result=await result.json();
        if(result)
        {
            setProduct(result);
        }
    }else
    {
        getProducts();
    }
    
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
     
          <div className="w-11/12 flex flex-col items-center ">
          <h1 className="font-bold font-serif text-3xl underline m-2 mt-9  p-2 border-2 border-slate-500 shadow-xl">Product List</h1>
          <div className="w-11/12 flex justify-end">
          <div className=" w-[280px] border-2 border-slate-500 shadow-lg m-4 mr-0 p-2 space-x-2 font-serif">
            <label className="font-bold text-lg" htmlFor="search">Search:</label>
            <input className="border-2 border-slate-300" type="text" id="search" placeholder="Search Product"
            onChange={searchHandle}></input>
          </div>
          </div>
          </div>
         
         
        <div className="w-11/12 border-2 border-slate-700 shadow-lg  ">
          <div className="overflow-x-auto flex flex-col items-center ">
            <table className="table flex flex-col items-center">
              {/* head */}
              <thead>
                <tr  className="bg-red-400" >
                  <th></th>
                  <th className="font-bold text-xl text-black" >Name</th>
                  <th className="font-bold text-xl text-black">Price</th>
                  <th className="font-bold text-xl text-black">Category</th>
                  <th className="font-bold text-xl text-black">Company Name</th>
                   <th></th>
                   <th></th>
                </tr>
              </thead>
              
                { product.length>0?product.map((item,index)=>{
                    return (
                        <tbody>
                    <tr key={item._id} className=" font-bold hover:bg-slate-300">
                    <th>{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.company}</td>
                    <td><button onClick={()=>delProduct(item._id)} className="bg-green-500 m-2 p-2 font-semibold font-serif rounded-md hover:bg-red-500 hover:text-white">Delete</button></td>
                     <td><Link className="bg-green-500 m-2 p-2 font-semibold font-serif rounded-md hover:bg-yellow-500 " to={`/update/${item._id}`}> Update</Link></td>
                  </tr> </tbody>)
                }): <div className=" w-11/12 flex flex-row justify-center"><h1>No result found</h1></div>
                }
             
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
