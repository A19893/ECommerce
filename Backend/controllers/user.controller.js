const productModel = require("../models/productModel");
const User=require("../models/userModel");
const objId=require("mongodb").ObjectId
//Register a User
exports.registerUser=async(req,res)=>{
    console.log("Req",req.body);
await User.findOne({email:req.body.email}).then((result)=>{
    console.log("result mila",result);
    if(result){
        return  res.status(500).json({
            success:false,
            message:"Username already exists",
            result
         });
    }
})
        const creation=await User.create(req.body);
        res.status(201).json({
            success:true,
            creation
         });
}
//Check User Exists 
exports.loginUser=async(req,res)=>{
    console.log(req.body);
    await User.findOne({ $or: [{ email: req.body.email }, { number: req.body.email }] }).then((result)=>{
        console.log(result);
        if(result==null){
            return res.status(200).json({
                success:false,
                message:"User not Found"
            })
        }
        else{
            if(result.password===req.body.password){
           return   res.status(201).json({
            success:true,
            message:"User Found",
            result
           })}
        else{
            return   res.status(203).json({
                success:true,
                message:"Username or Password Incorrect"
               })
        }
        }
    }).catch(err=>{
        console.log(err);
    });
}
//Get All User Details
exports.getAllUsers=async(req,res,next)=>{
    const result=await User.find({role:"User"});
    return res.status(200).json({
        success:true,
        result
    })
}
//Get User Details
exports.getUserDetails=async(req,res,next)=>{
    await User.findOne({_id:req.params.id}).then((result)=>{
        if(result){
           return res.status(200).json({
                success:true,
                result
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"User Not Found"
            })
        }
    })
}
//update User Details
exports.updateUserDetails=async(req,res,next)=>{
   const result= await User.findByIdAndUpdate(req.params.id,req.body);
   return res.status(200).json({
    success:true,
    result
   })
}
//Get All Vendors
exports.getAllVendors=async(req,res,next)=>{
    const result=await User.find({role:"Vendor"});
    return res.status(200).json({
        success:true,
        result
    })
}
//Delete a Specific User
exports.deleteUser=async(req,res,next)=>{
   const result= await User.findByIdAndRemove(req.params.id);
   if(!result){
    return res.status(500).json({
        success:false,
        message:"User Not Found"
      }) 
}
   console.log(result);
    res.status(200).json({
        success:true,
        message:"Deleted"
     })
}
//Selecting a Role for User
exports.selectRole=async(req,res)=>{
    console.log(req.body);
   User.updateOne({_id:new objId(req.body.id)},{$set:{role:req.body.role}}).then((result)=>{
        console.log(result);
        User.findOne({_id:req.body.id}).then((result)=>{
            console.log(result);
            return res.status(201).json({
            success:true,
            result
        })
        })
    }).catch((err)=>{
        console.log(err);
    })
}