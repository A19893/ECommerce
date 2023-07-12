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
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  pinCode: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
},
  orderItems:[
    {
        name: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        image:{
            type:String,
            required:true,
        },
        product:{
            type:mongoose.Schema.ObjectId,
            Ref:"Product",
            required:true
        },
    },
  ],
  user:{
    type:mongoose.Schema.ObjectId,
    Ref:"User",
    required:true
  },
  itemsPrice:{
    type:Number,
    default:0,
  },
  taxPrice:{
    type:Number,
    default:0,
  },
  shippingPrice:{
    type:Number,
    default:0,
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
