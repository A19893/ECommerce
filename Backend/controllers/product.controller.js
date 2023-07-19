const Product = require("../models/productModel");
const AsyncErrors = require("../middlewares/AsyncErrors");
//Create Product
exports.createProduct = AsyncErrors(async (req, res) => {
  console.log("data", req.body);
  const product = await Product.create(req.body);
  console.log(product);
  res.status(201).json({ 
    success: true,
    product 
  });
});
//Get All Product
exports.getAllProducts = AsyncErrors(async (req, res, next) => {
  const result = await Product.find({});
  res.status(200).json({
    success: true,
    result,
  });
});
//Update a Specific Product
exports.updateProduct = AsyncErrors(async (req, res, next) => {
  console.log('----id---',req.params.id,'----body',req.body);
  let result = await Product.findById(req.params.id);
  if (!result) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  result = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    result,
  });
});
//Delete a Specific Product
exports.deleteProduct = AsyncErrors(async (req, res) => {
  let result = await Product.findById(req.params.id);
  if (!result) {
    return res.status(203).json({
      success: false,
      message: "Product Not Found",
    });
  }
  result = await Product.findByIdAndRemove(req.params.id);
  res.status(200).json({
    success: true,
    message: "Deleted",
  });
});
//Get a Specific Product
exports.getSpecificProduct = AsyncErrors(async (req, res, next) => {
  let result = await Product.findById(req.params.id);
  if (!result) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  res.status(200).json({
    success: true,
    result,
  });
});
//get Vendor products
exports.getVendorProducts=AsyncErrors(async(req,res)=>{
  let result=await Product.find({CreatedBy:req.params.id});
  if(result){
  return res.status(200).json({
    success:true,
    result
  })
}
})
//get Best Products
exports.getBestProducts=AsyncErrors(async(req,res)=>{
  let result=await Product.find().sort({PurchaseCount:-1}).limit(4);
  if(result){
    return res.status(200).json({
      success:true,
      result
    })
  }
})