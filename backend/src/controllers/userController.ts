import { Router } from "express";
import { userModel } from "../db.js";
import {JWT_SECRET_KEY} from '../config.js'
import jwt from 'jsonwebtoken';


const userRouter=Router();

userRouter.post("/signup",async (req,res)=>{
const {userName,password}= req.body;
try{
const signup=await userModel.create({
    userName,
    password
})
 if(signup){
    res.status(200).json({
        message:"user id created successfully"
    })
 }
}
catch(err){
res.status(400).json({
    message:err
  })
 }
});

userRouter.post("/signin",async (req,res)=>{
const {userName,password} =req.body;
try{
const user=await userModel.findOne({
    userName,
    password
})
if(user){
const token=jwt.sign({Id: user._id},JWT_SECRET_KEY)
res.status(200).json({
    token:token
  })
  }
 }
catch(err){
    res.status(400).json({
        message:err
    })
}
});

userRouter.post("/expenses",(req,res)=>{

});

userRouter.get("/expenses",(req,res)=>{

});

userRouter.put("/expenses",(req,res)=>{

});

userRouter.delete("/expenses",(req,res)=>{

});


userRouter.post("/income",(req,res)=>{

});

userRouter.get("/income",(req,res)=>{

});

userRouter.put("/income",(req,res)=>{

});

userRouter.get("/income",(req,res)=>{

});

userRouter.delete("/income",(req,res)=>{

});

export {userRouter};

