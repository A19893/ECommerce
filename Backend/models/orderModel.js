const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    states: {
      type: String,
      required: true,
    },
  pincode: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
},
  orderItems:[],
  user:{
    type:mongoose.Schema.ObjectId,
    Ref:"User",
    required:true
  },
  taxPrice:{
    type:Number,
    default:780,
  },
  shippingPrice:{
    type:Number,
    default:1500,
  },
  orderStatus:{
    type:String,
    required:true,
    default:"Processing",
  },
  deliveredAt:{
    type:Date,
    default:Date.now(),
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});
module.exports = mongoose.model("Order",orderSchema);
