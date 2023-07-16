const mongoose=require("mongoose");
const validator=require("validator");
const date=new Date();
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"Enter Your Mail"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a Valid Name"]
    },
    password:{
        type:String,
        required:[true,"Enter Your Password"],
        minLength:[6,"Password should be greater than 6 characters"],
        default:"Password"
    },
    avatar:{
        type:String,
        default:'Avatar'
    },
    role:{
        type:String,
        default:'User',
    },
    joiningDate:{
        type:String,
        default:''+date.getUTCDate()+'-'+date.getMonth()+'-'+date.getFullYear(),
    },
    joiningTime:{
        type:String,
        default:date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
    },
    address:{
        type:String,
        default:'Address'
    },
    number:{
        type:String,
        default:'Number'
    },
    fileList:{
        type:String,
        default:'Avatar'
    }
})
module.exports=mongoose.model("Users",userSchema)