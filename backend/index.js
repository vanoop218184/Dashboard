const express = require("express");
const app = express();
const cors = require("cors");
const Jwt=require('jsonwebtoken');
const jwtKey='e-comm';

require("./db/config");
const User = require("./db/User.js");
const Product=require("./db/Product.js")
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
          res.send({result:"something went wrong ,try after some time"});
        }
        res.send(user,{auth:token});
      })
      
    } 
  } 
});
app.post("/addproduct",async(req,res)=>{
  let product=new Product(req.body);
  let result=await product.save();

  res.send(result);

})
app.get("/products", async(req,res)=>{
  let result= await Product.find();
  if(result.length>0)
  {
    res.send(result);
  }
  else{
    res.send({result:"No product found"});
  }
})
app.delete("/product/:id",async(req,res)=>{
   
   const result= await Product.deleteOne({_id:req.params.id});
   res.send(result);
})
app.get("/product/:id",async(req,res)=>{
  const result= await Product.findOne({_id:req.params.id});
  if(result)
  {res.send(result);}
  else{
    res.send({result:"No record Found"});
  }
})
app.put("/product/:id",async(req,res)=>{
  let result=await Product.updateOne(
    {_id:req.params.id},
    {
      $set:req.body
    }
    )
    res.send(result);
})
app.get("/search/:key",async(req,res)=>{
  const result=await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {company:{$regex:req.params.key}},
      {category:{$regex:req.params.key}}
    ]
  });
  res.send(result);
})
app.listen("8000", () => {
  console.log("app is running at port 8000");
});
